'use strict';

class CustomError extends Error {
  constructor(message = '', code = 500) {
    super();
    this.message = message;
    this.code = code;
    Error.captureStackTrace(this, CustomError);
  }
}

module.exports = CustomError;
