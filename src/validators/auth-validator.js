const Joi = require("joi");

const registerSchema = Joi.object({
  name: Joi.string().trim().required(),
  username: Joi.string().trim().required(),
  email: Joi.string().trim().email().required(),
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{6,30}$/)
    .trim()
    .required(),
  confirmPassword: Joi.string().valid(Joi.ref("password")).trim().required(),
  mobile: Joi.number().integer().required(),
  // role: Joi.string(),
});

exports.registerSchema = registerSchema;

const loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

exports.loginSchema = loginSchema;
