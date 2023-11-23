const fs = require("fs").promises;
const createError = require("../utils/create-error");
const prisma = require("../models/prisma");
const { upload } = require("../utils/cloudinary-service");

exports.createOrder = async (req, res, next) => {
  try {
    const { address } = req.body;

    if (!address) {
      return next(createError("address is required", 400));
    }
    if (!req.file.filename) {
      return next(createError("filename is required", 400));
    }
    const image = await upload(req.file.path);

    const cartItems = await prisma.cart.findMany({
      where: {
        userId: req.user.id,
      },
      include: {
        product: true,
      },
    });
    if (!cartItems || cartItems.length === 0) {
      return next(createError("cart is empty", 400));
    }

    const total = cartItems.reduce((total, cart) => {
      return total + cart.product.productPrice * cart.quantity;
    }, 0);

    const payment = await prisma.payment.create({
      data: {
        userId: req.user.id,
        address: address,
        paymentQRCode: image,
        sumAmount: total,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
    let orders = cartItems.map((cartItem) => {
      return {
        userId: req.user.id,
        productId: cartItem.productId,
        quantity: cartItem.quantity,
        totalAmount: cartItem.product.productPrice * cartItem.quantity,
        status: "placed",
        paymentId: payment.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    });
    orders = await prisma.order.createMany({
      data: orders,
    });

    await prisma.cart.deleteMany({
      where: {
        userId: req.user.id,
      },
    });

    res.status(201).json({ paymentId: payment.id });
  } catch (err) {
    next(err);
  }
};

exports.getOrderList = async (req, res, next) => {
  try {
    const orders = await prisma.order.findMany({
      where: {
        userId: req.user.id,
      },
      include: {
        product: true,
        payment: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    res.json({ orders: orders });
  } catch (err) {
    console.log(`err: ${err}`);
    next(err);
  }
};

exports.getOrderSummary = async (req, res, next) => {
  try {
    const payment = await prisma.payment.findFirst({
      where: {
        id: +req.params.id,
      },
      include: {
        order: {
          include: {
            product: true,
          },
        },
      },
    });
    res.json({ payment: payment });
  } catch (err) {
    console.log(`err: ${err}`);
    next(err);
  }
};

// getOrderSummaries is only for admin.
exports.getOrderSummaries = async (req, res, next) => {
  try {
    if (req.user.isAdmin === false) {
      return next(createError("You are not admin", 403));
    }

    const { status } = req.query;

    // Fetch payments with conditional order filtering
    const payments = await prisma.payment.findMany({
      include: {
        order: {
          include: {
            product: true,
          },
          where: status !== "all" ? { status: status } : undefined,
        },
        user: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    // Filter out payments with empty orders
    const filteredPayments = payments.filter(
      (payment) => payment.order.length > 0
    );

    res.json({ payments: filteredPayments, status: status });
  } catch (err) {
    console.log(`err: ${err}`);
    next(err);
  }
};

// getOrderSummaries is only for admin.
exports.updateOrderStatus = async (req, res, next) => {
  try {
    if (req.user.isAdmin === false) {
      return next(createError("You are not admin", 403));
    }
    const { status } = req.body;
    if (!status) {
      return next(createError("status is required", 400));
    }

    await prisma.order.update({
      where: {
        id: +req.params.id,
      },
      data: {
        status: status,
      },
    });
    res.json({ message: "success" });
  } catch (err) {
    console.log(`err: ${err}`);
    next(err);
  }
};
