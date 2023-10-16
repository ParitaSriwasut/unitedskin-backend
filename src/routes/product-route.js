const express = require("express");
const productController = require("../controllers/product-controller");
const authenticateMiddleware = require("../middlewares/authenticate");
const router = express.Router();

router.get("", authenticateMiddleware, productController.productList);

router.get("/:id", authenticateMiddleware, productController.productDetails);

// TODO: allow only admin to create product.
// Add field isAdmin in user model.
// isAdmin is set to Db directly by RITA.
router.post("/", authenticateMiddleware, productController.createProduct);

module.exports = router;
