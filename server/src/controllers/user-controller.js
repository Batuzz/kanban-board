'use strict';

const User = require('../models/User');
const md5 = require('crypto-js/md5');
const CustomError = require('../utils/CustomError');
const s = require('http-status');
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'secret';

async function register(req, res) {
  const { name, password, email } = req.body;

  const [userByName] = await User.query().where({ name });
  if (userByName && userByName.id) {
    throw new CustomError('User with this name already exists', s.CONFLICT);
  }

  const [userByEmail] = await User.query().where({ email });
  if (userByEmail && userByEmail.id) {
    throw new CustomError('User with this email already exists', s.CONFLICT);
  }

  const hashedPassword = md5(password).toString();

  const user = await User
    .query()
    .insert({
      name,
      password: hashedPassword,
      email,
    });

  return res.send(user);
}

async function login(req, res) {
  const { name, password } = req.body;

  const hashedPassword = md5(password).toString();

  const [user] = await User
    .query()
    .where({
      name,
      password: hashedPassword,
    });

  if (!user || !user.id) {
    throw new CustomError('User with such credentials does not exist', s.NOT_FOUND);
  }

  const token = jwt.sign({
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  }, secret);

  return res.send({
    token
  });
}

module.exports = {
  register,
  login,
}
