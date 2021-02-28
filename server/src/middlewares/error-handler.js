'use strict';

const httpStatus = require('http-status');
const CustomError = require("../utils/CustomError");

function errorHandler(error, req, res, next) {
  let errorToThrow;

  if (error.error && error.error.isJoi) {
    errorToThrow = {
      message: error.error.message,
      type: "Validation error",
      code: httpStatus.UNPROCESSABLE_ENTITY,
    };
  } else if (error instanceof CustomError) {
    errorToThrow = {
      message: error.message,
      code: error.code,
    };
  } else {
    errorToThrow = {
      message: 'Internal server error',
      code: error.code || httpStatus.INTERNAL_SERVER_ERROR,
    };
  }

  if(errorToThrow.code >= 500)
    console.log(error);

  res
    .status(errorToThrow.code)
    .send(errorToThrow);
  next();
}

module.exports = errorHandler;
