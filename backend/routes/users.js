const express = require('express');
const auth = require('../middlewares/auth');
const { regExpUrl, regExpObjectId } = require('../helpers/constants/index');

const router = express.Router();
// eslint-disable-next-line import/order
const path = require('path');
const {
  getUsers, getUserId, addUser, updateProfile, updateAvatar, login, getUserMe,
} = require('../controllers/users');

// eslint-disable-next-line import/order
const { celebrate, Joi, errors } = require('celebrate');

const { BadRequest } = require('../helpers/errors');

router.post('/signin', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email().trim()
      .messages({
        'string.email': 'Не правильный формат "email"',
        'string.empty': 'email не может быть пустым',
        'any.required': '"email" обязательное поле',
      }),
    password: Joi.string().required().min(8).trim()
      .messages({
        'string.empty': 'Пароль не может быть пустым',
        'any.required': 'Пароль обязательное поле',
        'string.min': 'Пароль не должен быть меньше {#limit} символов',
      }),
  }).messages({
    'object.unknown': 'Все поля должны быть заполнены',
  }),
}), login);

router.post('/signup', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email().trim()
      .messages({
        'string.email': 'Не правильный формат "email"',
        'string.empty': 'email не может быть пустым',
        'any.required': '"email" обязательное поле',
      }),
    password: Joi.string().required().min(8).trim()
      .trim()
      .messages({
        'string.empty': 'Пароль не может быть пустым',
        'any.required': 'Пароль обязательное поле',
        'string.min': 'Пароль не должен быть меньше {#limit} символов',
      }),
    about: Joi.string().trim().min(2).max(30)
      .messages({
        'string.min': 'Тема не должена быть меньше {#limit} символов',
        'string.max': 'Тема не должена быть больше {#limit} символов',
      }),
    name: Joi.string().trim().min(2).max(30)
      .messages({
        'string.min': 'Имя не должено быть меньше {#limit} символов',
        'string.max': 'Имя не должено быть больше {#limit} символов',
      }),
    avatar: Joi.string().trim().pattern(new RegExp(regExpUrl)).messages({
      'string.pattern.name': 'Пароль не должен быть меньше {#limit} символов',
      'string.pattern.invert.base': 'Пароль не должен быть больше {#limit} символов',
      'string.pattern.invert.name': 'Пароль не должен быть больше {#limit} символов2',
    }),
  }),
}), addUser);

// все что ниже, только авторизированным доступно
router.use(auth);

router.get('/users', getUsers);

router.get('/users/me', getUserMe);

router.get('/users/:id', celebrate({
  params: Joi.object().keys({
    id: Joi.string().trim().required().pattern(new RegExp(regExpObjectId)),
  }),
}), getUserId);

router.patch('/users/me', celebrate({
  body: Joi.object().keys({
    name: Joi
      .string()
      .trim()
      .required()
      .min(2)
      .max(30),
    about: Joi
      .string()
      .trim()
      .required()
      .min(2)
      .max(30),
  }),
}), updateProfile);

router.patch('/users/me/avatar', celebrate({
  body: Joi.object().keys({
    avatar: Joi
      .string()
      .required()
      .trim()
      .pattern(new RegExp(regExpUrl)),
  }),
}), updateAvatar);

module.exports = router;
