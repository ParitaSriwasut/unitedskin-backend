const express = require("express");
const authController = require("../controllers/auth-controller");
const authenticateMiddleware = require("../middlewares/authenticate");
const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/me", authenticateMiddleware, authController.getMe);

router.post("/admin/");
module.exports = router;
