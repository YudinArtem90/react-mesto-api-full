const { NotFoundError, Forbidden, BadRequest } = require('./errors');

const checkErrors = (error, next) => {
  let result = error;

  switch (error.name) {
    case 'ValidationError':
      result = new BadRequest('Переданный не корректные данные.');
      break;
    case 'SomeErrorName':
      result = new BadRequest('Переданный не корректные данные.');
      break;
    case 'CastError':
      result = new BadRequest('Переданный не корректные данные.');
      break;
    case 'DocumentNotFoundError':
      result = new NotFoundError('Не найдено искомый объект в базе.');
      break;
    default: break;
  }

  console.log('error.name', error.name);
  console.log('result', result);

  next(result);
}

module.exports = checkErrors;
