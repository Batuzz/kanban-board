'use strict';

const knex = require('knex');
const connectionOptions = require('./knexfile');
const { Model } = require('objection');

const knexConnection = knex(connectionOptions['dev']);
Model.knex(knexConnection);

module.exports = knexConnection;
