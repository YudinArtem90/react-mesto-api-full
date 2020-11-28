const express = require('express');
const {
  getCards, createCard, deleteCard, addLike, deleteLike,
} = require('../controllers/cards');
const { regExpUrl } = require('../helpers/constants/index');

const router = express.Router();

// eslint-disable-next-line import/order
const { celebrate, Joi } = require('celebrate');

router.get('/', getCards);

router.post('/', celebrate({
  body: Joi.object().keys({
    name: Joi
      .string()
      .trim()
      .required()
      .min(2)
      .max(30),
    link: Joi
      .string()
      .required()
      .min(8)
      .trim()
      .pattern(new RegExp(regExpUrl)),
  }),
}), createCard);

router.delete('/:cardId', celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().trim().min(14).required(),
  }),
}), deleteCard);

router.put('/:cardId/likes', celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().trim().min(14).required(),
  }),
}), addLike);

router.delete('/:cardId/likes', celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().trim().min(14).required(),
  }),
}), deleteLike);

module.exports = router;
