const path = require('path');
const bcrypt = require('bcryptjs');
const User = require('../models/user');

const { getData, getError } = require(path.join(__dirname, '..', 'helpers', 'getData'));

module.exports.getUsers = (req, res) => {
  User.find({})
    .then((users) => getData(res, users))
    .catch((err) => getError(res, { message: `Ошибка при запросе пользователя, ${err}` }, err));
};

module.exports.getUserId = (req, res) => {
  const userId = req.params.id;

  User.findById(userId)
    .then((user) => getData(res, user))
    .catch((err) => getError(res, { message: `Ошибка при запросе пользователя, ${err}` }, err));
};

module.exports.addUser = (req, res) => {
  const {
    name, about, avatar, email, password,
  } = req.body;

  bcrypt.hash(password, 10)
    .then((hash) => User.create({
      name, about, avatar, email, password: hash,
    }))
    .then((users) => getData(res, users))
    .catch((err) => getError(res, { message: `Ошибка при создании пользователей, ${err}` }, err));
};

module.exports.updateProfile = (req, res) => {
  const userId = req.user._id;
  const { name } = req.body;

  if (!name) {
    getError(res, { message: 'Параметр name в теле запроса не найден' }, { name: 'ValidationError' });
    return;
  }

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
    .catch((err) => getError(res, { message: `Ошибка при изменении пользователя, ${err}` }, err));
};

module.exports.updateAvatar = (req, res) => {
  const userId = req.user._id;
  const { avatar } = req.body;

  if (!avatar) {
    getError(res, { message: 'Параметр avatar в теле запроса не найден' }, { name: 'ValidationError' });
    return;
  }

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
    .catch((err) => getError(res, { message: `Ошибка при изменении аватара, ${err}` }, err));
};
