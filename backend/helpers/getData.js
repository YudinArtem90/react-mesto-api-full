/* eslint-disable no-use-before-define */
const getData = (res, data) => {
  if (!data) {
    getError(res, { message: 'Данные не найдены' }, { name: 'CastError' });
  }
  res.status(200).send(data);
};

const getError = (res, message = '', error) => {
  let status;

  switch (error.name) {
    case 'ValidationError': status = 400; break;
    case 'CastError': status = 404; break;
    default: status = 500;
  }

  res.status(status).send(message === '' ? 'На сервере произошла ошибка' : message);
};

module.exports = {
  getData,
  getError,
};
