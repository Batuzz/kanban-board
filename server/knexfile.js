'use strict';
require('dotenv').config({ path: `${__dirname}/.env`});

const { DB_URL } = process.env;

module.exports = {
  dev: {
    connection: DB_URL,
    client: 'pg',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
}
