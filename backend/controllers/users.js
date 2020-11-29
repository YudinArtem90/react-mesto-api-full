const path = require('path');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { BadRequest, NotFoundError } = require('../helpers/errors');

const { getData } = require(path.join(__dirname, '..', 'helpers', 'getData'));

module.exports.getUsers = (req, res, next) => {
  User.find({})
    .then((users) => getData(res, users))
    .catch((err) => {
      throw new NotFoundError('Ошибка при запросе пользователя');
    })
    .catch(next);
};

module.exports.getUserId = (req, res, next) => {
  const userId = req.params.id;

  User.findById(userId)
    .then((user) => getData(res, user))
    .catch((err) => {
      throw new NotFoundError('Ошибка при запросе пользователя');
    })
    .catch(next);
};

module.exports.addUser = (req, res, next) => {
  const { email, password } = req.body;

  bcrypt.hash(password, 10)
    .then((hash) => User.create({ email, password: hash }))
    .then((users) => getData(res, users))
    .catch((err) => {
      throw new BadRequest('Ошибка при создании пользователей');
    })
    .catch(next);
};

module.exports.updateProfile = (req, res, next) => {
  const userId = req.user._id;
  // const { name } = req.body;

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
    .catch((err) => {
      throw new BadRequest('Ошибка при изменении пользователя');
    })
    .catch(next);
};

module.exports.updateAvatar = (req, res, next) => {
  const userId = req.user._id;
  console.log('userId', userId);
  console.log('req.body', req.body);

  // User.findById(userId).then((user) => {console.log('user', user); getData(res, user)})

  User.findByIdAndUpdate(
    userId,
    req.body,
    {
      new: true,
      runValidators: true,
      upsert: true,
    },
  )
    .then((user) => {console.log('user', user); getData(res, user)})
    .catch((err) => {
      console.log('err', err);
      throw new BadRequest('Ошибка при изменении аватара');
    })
    .catch(next);
};

module.exports.login = (req, res, next) => {
  const { email, password } = req.body;

  return User.findUserByCredentials(email, password)
    .then((user) => {
    // аутентификация успешна! пользователь в переменной user
    // add token
      const token = jwt.sign(
        { _id: user._id },
        process.env.JWT_SECRET,
        { expiresIn: '7d' },
      );

      res.send({ token });
    })
    .catch(next);
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
