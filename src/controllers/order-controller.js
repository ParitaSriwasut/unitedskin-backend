const fs = require("fs").promises;
const createError = require("../utils/create-error");
const prisma = require("../models/prisma");

exports.createOrder = async (req, res, next) => {
  try {
    const { creditCardNumber, address } = req.body;
    if (!creditCardNumber) {
      return next(createError("creditCardNumber is required", 400));
    }

    if (!address) {
      return next(createError("address is required", 400));
    }

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
    console.log(`cartItems: ${cartItems}`);

    const total = cartItems.reduce((total, cart) => {
      return total + cart.product.productPrice * cart.quantity;
    }, 0);

    if (!verifyCreditCard(creditCardNumber, total)) {
      return next(createError("invalid credit card", 400));
    }
    console.log(`total: ${JSON.stringify(total)}`);

    const payment = await prisma.payment.create({
      data: {
        userId: req.user.id,
        address: address,
        paymentMethod: "credit card",
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

    res.status(201).json({ orders: orders });
  } catch (err) {
    next(err);
  }
};

function verifyCreditCard(creditCardNumber, total) {
  // Call Payment provider API to verify credit card.
  return true;
}
