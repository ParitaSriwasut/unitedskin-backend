const express = require("express");
const orderController = require("../controllers/order-controller");
const authenticateMiddleware = require("../middlewares/authenticate");
const upload = require("../middlewares/upload");
const router = express.Router();

router.post(
  "",
  authenticateMiddleware,
  upload.single("file"),
  orderController.createOrder
);
router.get("", authenticateMiddleware, orderController.getOrderList);
router.patch("/:id", authenticateMiddleware, orderController.updateOrderStatus);
router.get(
  "/payment/:id",
  authenticateMiddleware,
  orderController.getOrderSummary
);
router.get(
  "/payments",
  authenticateMiddleware,
  orderController.getOrderSummaries
);

module.exports = router;
