const Joi = require("joi");

const checkProductIdSchema = Joi.object({
  productId: Joi.number().integer().positive().required(),
});

exports.checkProductIdSchema = checkProductIdSchema;
