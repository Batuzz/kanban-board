'use strict';

const Joi = require('joi');

const idSchema = Joi.object({
  id: Joi.number()
    .required(),
});

module.exports = {
  idSchema,
}
