const {
  NotFoundError, BadRequest, Conflict,
} = require('./errors');

const checkErrors = (error, next) => {
  let result = error;

  switch (error.name) {
    case 'ValidationError':
      result = new BadRequest('Переданы некорректные данные.');
      break;
    case 'SomeErrorName':
      result = new BadRequest('Переданы некорректные данные.');
      break;
    case 'CastError':
      result = new BadRequest('Переданы некорректные данные.');
      break;
    case 'DocumentNotFoundError':
      result = new NotFoundError('Не найдено искомый объект в базе.');
      break;
    case 'MongoError':
      result = new Conflict('Данный пользователь уже существует в базе.');
      break;
    default: break;
  }

  next(result);
};

module.exports = checkErrors;
