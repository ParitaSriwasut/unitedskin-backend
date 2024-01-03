const fs = require("fs").promises;
const createError = require("../utils/create-error");
const { upload } = require("../utils/cloudinary-service");
const prisma = require("../models/prisma");

exports.productList = async (req, res, next) => {
  // TODO: do pagination.
  const query = {
    take: req.query.limit,
    skip: req.query.offset,
  };

  if (
    req.query.categoryName === "MEN" ||
    req.query.categoryName === "WOMEN" ||
    req.query.categoryName === "KIDS" ||
    req.query.categoryName === "UNISEX"
  ) {
    query.where = {
      categoryName: req.query.categoryName,
    };
  }

  const products = await prisma.product.findMany(query);

  res.json({ products });
};

exports.productDetails = async (req, res, next) => {
  try {
    const product = await prisma.product.findFirst({
      where: {
        id: +req.params.id,
      },
    });
    res.status(200).json({ product });
  } catch (err) {
    next(err);
  }
};

exports.createProduct = async (req, res, next) => {
  try {
    if (req.user.isAdmin === false) {
      return next(createError("You are not admin", 403));
    }

    if (!req.file.filename) {
      return next(createError("filename is required", 400));
    }
    const image = await upload(req.file.path);

    const product = await prisma.product.create({
      data: {
        categoryName: req.body.categoryName,
        productName: req.body.productName,
        shortDescription: req.body.shortDescription,
        guide: req.body.guide,
        productPrice: req.body.productPrice,
        image: image,
      },
    });
    res.status(200).json({ product });
  } catch (err) {
    next(err);
  } finally {
    if (req.file) {
      fs.unlink(req.file.path);
    }
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
    if (req.user.isAdmin === false) {
      return next(createError("You are not admin", 403));
    }

    if (!req.file.filename) {
      return next(createError("filename is required", 400));
    }
    const image = await upload(req.file.path);

    const product = await prisma.product.update({
      data: {
        categoryName: req.body.categoryName,
        productName: req.body.productName,
        shortDescription: req.body.shortDescription,
        guide: req.body.guide,
        productPrice: req.body.productPrice,
        image: image,
      },
      where: {
        id: +req.params.id,
      },
    });
    res.status(200).json({ product: product });
  } catch (err) {
    next(err);
  } finally {
    if (req.file) {
      fs.unlink(req.file.path);
    }
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    if (req.user.isAdmin === false) {
      return next(createError("You are not admin", 403));
    }
    const cart = await prisma.cart.findFirst({
      where: {
        productId: +req.params.id,
      },
    });
    if (cart) {
      res.status(200).json({ reason: "This product is in cart" });
      return;
    }

    const order = await prisma.order.findFirst({
      where: {
        productId: +req.params.id,
      },
    });
    if (order) {
      res.status(200).json({ reason: "This product is in order" });
      return;
    }

    await prisma.product.delete({
      where: {
        id: +req.params.id,
      },
    });
    res.status(200).json({ deleted: true });
  } catch (err) {
    next(err);
  }
};

exports.searchProduct = async (req, res, next) => {
  const { searchText, minPrice, maxPrice } = req.query;

  try {
    const product = await prisma.product.findMany({
      where: {
        OR: [
          { productName: { contains: searchText, mode: "insensitive" } },
          { categoryName: { contains: searchText, mode: "insensitive" } },
        ],
        productPrice: {
          gte: minPrice ? parseFloat(minPrice) : undefined,
          lte: maxPrice ? parseFloat(maxPrice) : undefined,
        },
      },
      orderBy: { id: "desc" }, // Order by id (assuming higher id newer product)
    });

    // Returning the products to the client with JSON format
    res.send({
      products: product.map((product) => ({
        ...product,
        id: product.id,
      })),
    });
  } catch (err) {
    next(createError("Error searching for product: " + err.message, 500));
  }
};
