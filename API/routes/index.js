const express = require('express');
const api = express.Router();

const user = require('./user');

api.use('/user', user); // EXAMPLE ROUTES

module.exports = api;