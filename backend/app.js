const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const rateLimit = require('express-rate-limit');
const favicon = require('serve-favicon');

const { routerUsers, routerCards } = require('./routes');

const { getError } = require(path.join(__dirname, 'helpers', 'getData'));

const app = express();
const { PORT = 3000 } = process.env;
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
})
  .then(() => console.log('DB Connected!'))
  .catch((err) => {
    console.log(`DB Connection Error: ${err.message}`);
  });

app.use(limiter);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use((req, res, next) => {
  req.user = {
    _id: '5f52ad66592716debf3c07f8',
  };

  next();
});

app.use('/', routerUsers);
app.use('/cards', routerCards);

app.use('/', (req, res) => {
  getError(res, { message: 'Запрашиваемый ресурс не найден' }, { name: 'CastError' });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(PORT);
});
