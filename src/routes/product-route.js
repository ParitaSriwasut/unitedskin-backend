const express = require("express");
const productController = require("../controllers/product-controller");
const authenticateMiddleware = require("../middlewares/authenticate");
const upload = require("../middlewares/upload");
const router = express.Router();

router.get("", authenticateMiddleware, productController.productList);

router.get("/:id", authenticateMiddleware, productController.productDetails);

// TODO: allow only admin to create product.
// Add field isAdmin in user model.
// isAdmin is set to Db directly by RITA.
router.post(
  "",
  authenticateMiddleware,
  upload.single("file"),
  productController.createProduct
);
router.put(
  "/:id",
  authenticateMiddleware,
  upload.single("file"),
  productController.updateProduct
);

module.exports = router;
