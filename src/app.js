require("dotenv").config();
const cors = require('cors');

const express = require("express");
const authMiddleware = require("./routes/auth-route");

const notFoundMiddleware = require("../src/middlewares/not-found");
const errorMiddleWare = require("../src/middlewares/error");

const app = express();
app.use(cors())
app.use(express.json());

app.use('/auth',authMiddleware);
app.use(notFoundMiddleware);
app.use(errorMiddleWare);

const PORT = process.env.PORT || "3000";
app.listen(PORT, () => console.log(`server running on port: ${PORT}`));
