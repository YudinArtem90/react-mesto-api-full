const jwt = require('jsonwebtoken');
const { Unauthorized } = require('../helpers/errors');
const getJwtSecret = require('../helpers/getJwtSecret');
const checkErrors = require('../helpers/checkErrors');

// eslint-disable-next-line consistent-return
const auth = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    throw new Unauthorized('Необходима авторизация');
  }

  // извлечём токен
  const token = authorization.replace('Bearer ', '');

  let payload;

  try {
    payload = jwt.verify(token, getJwtSecret());
  } catch (err) {
    next(checkErrors(err, next));
  }

  req.user = payload; // записываем пейлоуд в объект запроса

  next(); // пропускаем запрос дальше
};

module.exports = auth;
