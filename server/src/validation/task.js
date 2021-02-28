'use strict';

const Joi = require('joi');

const taskSchema = Joi.object({
  title: Joi.string()
    .min(3)
    .max(255)
    .required(),
  description: Joi.string()
    .min(3)
    .max(255)
    .required(),
});

const updateTaskSchema = Joi.object({
  title: Joi.string()
    .min(3)
    .max(255)
    .required(),
  description: Joi.string()
    .min(3)
    .max(255)
    .required(),
  status: Joi.string()
    .valid(['TODO', 'IN_PROGRESS', 'DONE'])
    .required(),
});



module.exports = {
  taskSchema,
  updateTaskSchema,
}
