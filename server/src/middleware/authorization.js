'use strict';

const jwt = require('jsonwebtoken');
const CustomError = require('../utils/CustomError');
const httpStatus = require('http-status');

const secret = process.env.JWT_SECRET || 'secret';

const authorization = async (req, res, next) => {
  const {authorization} = req.headers;
  if (!authorization || !authorization.length) {
    throw new CustomError('Authorization token was not provided', httpStatus.UNAUTHORIZED);
  }

  const token = authorization.replace('Bearer: ', '');
  let user;

  try {
    user = jwt.verify(token, secret);
  } catch (e) {
    throw new CustomError('Invalid token provided', httpStatus.FORBIDDEN);
  }

  req.user = user;
  next();
};

module.exports = authorization;
