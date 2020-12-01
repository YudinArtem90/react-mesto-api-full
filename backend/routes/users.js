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
const { celebrate, Joi } = require('celebrate');

router.post('/signin', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email().trim(),
    password: Joi.string().required().min(8).trim(),
  }),
}), login);

router.post('/signup', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email().trim(),
    password: Joi.string().required().min(8).trim(),
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
      .min(8)
      .trim()
      .pattern(new RegExp(regExpUrl)),
  }),
}), updateAvatar);

module.exports = router;
