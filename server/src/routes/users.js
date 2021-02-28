'use strict';

const express = require('express');
const validator = require('express-joi-validation');
const asyncHandler = require('../middleware/async-handler');
const { register, login } = require('../controller/user-controller');
const { registerSchema, loginSchema } = require('../validation/user');

const router = express.Router();
const validate = validator.createValidator({passError: true});

// Login
router.route('/login')
  .post(validate.body(loginSchema), asyncHandler(login));

// Register
router.route('/register')
  .post(validate.body(registerSchema), asyncHandler(register));

module.exports = router;
