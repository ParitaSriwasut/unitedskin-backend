const express = require("express");
const productController = require("../controllers/product-controller");
const authenticateMiddleware = require("../middlewares/authenticate");
const upload = require("../middlewares/upload");
const router = express.Router();

router.get("", authenticateMiddleware, productController.productList);

router.get("/:id", authenticateMiddleware, productController.productDetails);

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
router.delete("/:id", authenticateMiddleware, productController.deleteProduct);

module.exports = router;
