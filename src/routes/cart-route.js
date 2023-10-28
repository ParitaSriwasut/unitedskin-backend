const express = require("express");
const cartController = require("../controllers/cart-controller");
const authenticateMiddleware = require("../middlewares/authenticate");
const router = express.Router();

router.get("", authenticateMiddleware, cartController.getCart);

router.post("/add-to-cart", authenticateMiddleware, cartController.addToCart);

router.post(
  "/delete-from-cart",
  authenticateMiddleware,
  cartController.deleteFromCart
);
module.exports = router;
