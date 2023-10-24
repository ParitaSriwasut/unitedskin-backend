require("dotenv").config();
const cors = require("cors");

const express = require("express");
const authRoute = require("./routes/auth-route");
const productRoute = require("./routes/product-route");
const orderRoute = require("./routes/order-route");
const cartRoute = require("./routes/cart-route");

const notFoundMiddleware = require("../src/middlewares/not-found");
const errorMiddleWare = require("../src/middlewares/error");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", authRoute);
app.use("/product", productRoute);
app.use("/order", orderRoute);
app.use("/cart", cartRoute);
app.use(notFoundMiddleware);
app.use(errorMiddleWare);

const PORT = process.env.PORT || "3000";
app.listen(PORT, () => console.log(`server running on port: ${PORT}`));
