const jwt = require('jsonwebtoken');
const { Unauthorized } = require('../helpers/errors');

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
    payload = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    // отправим ошибку, если не получилось
    throw new Unauthorized('Необходима авторизация');
  }

  req.user = payload; // записываем пейлоуд в объект запроса

  next(); // пропускаем запрос дальше
};

module.exports = auth;
