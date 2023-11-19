const prisma = require("../models/prisma");

exports.getCart = async (req, res, next) => {
  const carts = await prisma.cart.findMany({
    where: {
      userId: req.user.id,
    },
    include: {
      product: true,
    },
  });

  const total = carts.reduce((total, cart) => {
    return total + cart.product.productPrice * cart.quantity;
  }, 0);

  res.json({ items: carts, total: total });
};

exports.addToCart = async (req, res, next) => {
  const { productId } = req.body;
  userId = req.user.id;
  const product = await prisma.product.findFirst({
    where: {
      id: product,
    },
  });
  if (!product) {
    return next(createError("product not found", 404));
  }

  const cart = await prisma.cart.findFirst(
    {
      where: {
        productId: productId,
        userId: userId,
      },
    },
    {
      include: {
        product: true,
      },
    }
  );

  // If record exists, update quantity
  // Else, create new record
  if (cart) {
    await prisma.cart.update({
      where: {
        productId_userId: {
          userId: userId,
          productId: productId,
        },
      },
      data: {
        quantity: cart.quantity + 1,
      },
    });
  } else {
    await prisma.cart.create({
      data: {
        quantity: 1,
        userId: userId,
        productId: productId,
      },
    });
  }

  await this.addToCart(req, res, next);
};

exports.deleteFromCart = async (req, res, next) => {
  const { productId } = req.body;
  const cart = await prisma.cart.findFirst({
    where: {
      productId_userId: {
        userId: req.user.id,
        productId: productId,
      },
    },
  });

  if (!cart) {
    return next(createError("cart not found", 404));
  }
  await prisma.cart.delete({
    where: {
      productId_userId: {
        userId: req.user.id,
        productId: productId,
      },
    },
  });

  await this.getCart(req, res, next);
};

exports.increaseFromCart = async (req, res, next) => {
  const { productId } = req.body;
  console.log(productId);
  userId = req.user.id;

  const cart = await prisma.cart.findFirst(
    {
      where: {
        productId: productId,
        userId: userId,
      },
    },
    {
      include: {
        product: true,
      },
    }
  );
  const cartRes = await prisma.cart.update({
    where: {
      productId_userId: {
        userId: userId,
        productId: productId,
      },
    },
    data: {
      quantity: cart.quantity + 1,
    },
  });
  if (cartRes.quantity === 0) {
    await prisma.cart.findUnique({
      where: {
        productId_userId: {
          userId: req.user.id,
          productId: productId,
        },
      },
    });
  }

  await this.getCart(req, res, next);
};

exports.decreaseFromCart = async (req, res, next) => {
  const { productId } = req.body;
  userId = req.user.id;

  const cart = await prisma.cart.findFirst(
    {
      where: {
        productId: productId,
        userId: userId,
      },
    },
    {
      include: {
        product: true,
      },
    }
  );
  const cartRes = await prisma.cart.update({
    where: {
      productId_userId: {
        userId: userId,
        productId: productId,
      },
    },
    data: {
      quantity: cart.quantity - 1,
    },
  });
  if (cartRes.quantity === 0) {
    await prisma.cart.findFirst({
      where: {
        productId_userId: {
          userId: req.user.id,
          productId: productId,
        },
      },
    });
  }

  await this.getCart(req, res, next);
};
