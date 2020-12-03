const jwt = require('jsonwebtoken');
const { Unauthorized } = require('../helpers/errors');
const getJwtSecret = require('../helpers/getJwtSecret');

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
    // попытаемся верифицировать токен
    payload = jwt.verify(token, getJwtSecret());
  } catch (err) {
    // отправим ошибку, если не получилось
    throw new Unauthorized('Необходима авторизация');
  }

  req.user = payload; // записываем пейлоуд в объект запроса

  next(); // пропускаем запрос дальше
};

module.exports = auth;
