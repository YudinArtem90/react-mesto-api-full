const { request } = require('express');

const routerUsers = require('./users');
const routerCards = require('./cards');

module.exports = {
  routerUsers,
  routerCards,
};
