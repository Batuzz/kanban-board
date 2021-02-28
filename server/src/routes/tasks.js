'use strict';

const express = require('express');
const validator = require('express-joi-validation');
const asyncHandler = require('../middlewares/async-handler');
const authorize = require('../middlewares/authorization');
const { create, getByID, getAll, update, deleteByID } = require('../controllers/task-controller');
const { taskSchema, updateTaskSchema } = require('../validation/task');
const { idSchema } = require('../validation/common');

const router = express.Router();
const validate = validator.createValidator({passError: true});

//Update task by ID
router.route('/:id')
  .put(validate.params(idSchema), validate.body(updateTaskSchema), asyncHandler(authorize), asyncHandler(update));

// Create task
router.route('/')
  .post(validate.body(taskSchema), asyncHandler(authorize), asyncHandler(create));

// Get task by ID
router.route('/:id')
  .get(validate.params(idSchema), asyncHandler(getByID));

// Delete task by ID
router.route('/:id')
  .delete(validate.params(idSchema), asyncHandler(authorize), asyncHandler(deleteByID));

// Get all tasks
router.route('')
  .get(asyncHandler(getAll));

module.exports = router;
