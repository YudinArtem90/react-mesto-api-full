const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const rateLimit = require('express-rate-limit');
const { errors } = require('celebrate');
const cors = require('cors');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { NotFoundError } = require('./helpers/errors/index');
const auth = require('./middlewares/auth');

// что бы считывала инфу с .env файла
require('dotenv').config();

const { routerUsers, routerCards } = require('./routes');

const app = express();
const { PORT = 3001 } = process.env;
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(limiter);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// что бы не ругался на CORS
app.use((req, res, next) => {
  res.header('Access-Control-Max-Age', '86400');
  next();
});
app.use(cors());

app.use(requestLogger); // подключаем логгер запросов, до обработчиков подключать

app.use('/', routerUsers);

// проверка пользователя на авторизацию (все что ниже, могут видеть только авторизованные)
app.use(auth);

// роуты, которым авторизация нужна
app.use('/cards', auth, routerCards);

app.use('/', () => {
  throw new NotFoundError('Запрашиваемый ресурс не найден');
});

// подключаем логгер ошибок. После обработчиков роутов и до обработчиков ошибок
app.use(errorLogger);

// обработчик ошибок celebrate
app.use(errors());

// централизованная обработка ошибок
app.use((err, req, res, next) => {
  console.log('err', err);
  if (err.statusCode) {
    res
      .status(err.statusCode)
      .send({ message: err.message });
  } else {
    const { statusCode = 500, message } = err;

    res
      .status(statusCode)
      .send({
        message: statusCode === 500
          ? 'На сервере произошла ошибка'
          : message,
      });
  }
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(PORT);
});
