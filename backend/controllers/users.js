const path = require('path');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { NotFoundError } = require('../helpers/errors');
const checkErrors = require('../helpers/checkErrors');

const { getData } = require(path.join(__dirname, '..', 'helpers', 'getData'));
const getJwtSecret = require('../helpers/getJwtSecret');

module.exports.getUsers = (req, res, next) => {
  User.find({})
    .then((users) => getData(res, users))
    .catch((err) => next(checkErrors(err, next)));
};

module.exports.getUserId = (req, res, next) => {
  const userId = req.params.id;

  User.findById(userId)
    .then((user) => getData(res, user))
    .catch((err) => next(checkErrors(err, next)));
};

module.exports.addUser = (req, res, next) => {
  User.create(req.body)
    .then(() => getData(res, { message: 'Учетная запись создана' }))
    .catch((err) => next(checkErrors(err, next)));
};

module.exports.updateProfile = (req, res, next) => {
  const userId = req.user._id;

  User.findByIdAndUpdate(
    userId,
    req.body,
    {
      new: true,
      runValidators: true,
      upsert: true,
    },
  )
    .then((user) => getData(res, user))
    .catch((err) => next(checkErrors(err, next)));
};

module.exports.updateAvatar = (req, res, next) => {
  const userId = req.user._id;

  User.findByIdAndUpdate(
    userId,
    req.body,
    {
      new: true,
      runValidators: true,
      upsert: true,
    },
  )
    .then((user) => getData(res, user))
    .catch((err) => next(checkErrors(err, next)));
};

module.exports.login = (req, res, next) => {
  const { email, password } = req.body;

  return User.findUserByCredentials(email, password)
    .then((user) => {
    // аутентификация успешна! пользователь в переменной user
    // add token
      const token = jwt.sign(
        { _id: user._id },
        getJwtSecret(),
        { expiresIn: '7d' },
      );

      res.send({ token });
    })
    .catch((err) => next(checkErrors(err, next)));
};

module.exports.getUserMe = (req, res, next) => {
  const { _id } = req.user;

  User.findOne({ _id })
    .then((users) => getData(res, users))
    .catch((err) => {
      throw new NotFoundError('Ошибка при запросе пользователя');
    })
    .catch(next);
};
