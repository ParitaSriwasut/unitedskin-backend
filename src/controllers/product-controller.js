const fs = require("fs").promises;
const createError = require("../utils/create-error");
const { upload } = require("../utils/cloudinary-service");
const prisma = require("../models/prisma");

exports.productList = async () => {
  // TODO: do pagination.
  const products = await prisma.product.findMany({
    where: {
      productCategory: req.query.productCategoryName,
    },
    take: req.query.limit,
    skip: req.query.offset,
    orderBy: {
      createdAt: "desc",
    },
  });

  return products;
};

exports.productDetails = async () => {
  const product = await prisma.product.findOne({
    where: {
      id: req.params.id,
    },
  });

  return product;
};

exports.createProduct = async (req, res, next) => {
  try {
    if (req.user.isAdmin === false) {
      return next(createError("You are not admin", 403));
    }
    //isAdmin : Do it later!
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
