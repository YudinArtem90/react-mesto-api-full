const { NotFoundError } = require('./errors');

/* eslint-disable no-use-before-define */
const getData = (res, data) => {
  if (!data) {
    throw new NotFoundError('Данные не найдены');
  }
  res.status(200).send(data);
};

module.exports = {
  getData,
};
