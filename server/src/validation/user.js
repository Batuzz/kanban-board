'use strict';

const Joi = require('joi');

const registerSchema = Joi.object({
  name: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),

  password: Joi.string()
    .min(3)
    .max(30)
    .required(),

  email: Joi.string()
    .email({ minDomainSegments: 2 })
    .required()
});

const loginSchema = Joi.object({
  name: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),

  password: Joi.string()
    .min(3)
    .max(30)
    .required(),
});

module.exports = {
  registerSchema,
  loginSchema,
}
