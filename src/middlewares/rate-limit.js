const { rateLimit } = require("express-rate-limit");

module.exports = rateLimit({
  windowMs: 60 * 1000,
  limit: 15,
  message: { message: "Too many requests from this IP" },
});
