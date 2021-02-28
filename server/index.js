'use strict';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('./src/middleware/error-handler');
const router = require('./src/routes');
require('./knex');

const {
  PORT = 3000
} = process.env;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(router);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server runs on http://localhost:${PORT}/`);
});
