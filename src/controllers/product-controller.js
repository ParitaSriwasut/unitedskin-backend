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
    const { message } = req.body;
    if (req.user.isAdmin === false) {
      return next(createError("You are not admin", 403));
    }
    //isAdmin : only admin can create products
    const {
      categoryName,
      productName,
      shortDescription,
      guide,
      productPrice,
      imagePath,
    } = req.body;
    if (!imagePath) {
      return next(createError("imagePath is required", 400));
    }
    if (message) {
      data.message = message;
    }

    const data = { userId: req.user.id };
    if (req.file) {
      data.image = await upload(imagePath);
    }

    const idx = [MEN, WOMEN, KIDS, UNISEX].findIndex((categoryName) => {
      return categoryName === req.body.categoryName;
    });
    if (idx === -1) {
      // nothing matched so idx is -1.
      // we return error.
      return next(createError("categoryName is invalid", 400));
    }

    data.productCategory = categoryName;
    data.productName = productName;
    data.shortDescription = shortDescription;
    data.guide = guide;
    data.productPrice = productPrice;

    await prisma.post.create({
      data: data,
    });
    res.status(201).json({ message: "product created" });
  } catch (err) {
    next(err);
  } finally {
    if (req.file) {
      fs.unlink(req.file.path);
    }
  }
};

// exports.deleteProduct = async (req, res, next) =>
// {
//   try
//   {
//     await product.findOne(req.params.id)
//   }
// }
