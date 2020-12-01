const express = require('express');
const {
  getCards, createCard, deleteCard, addLike, deleteLike,
} = require('../controllers/cards');
const { regExpUrl, regExpObjectId } = require('../helpers/constants/index');

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
      .trim()
      .pattern(new RegExp(regExpUrl)),
  }),
}), createCard);

router.delete('/:cardId', celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().trim().required().pattern(new RegExp(regExpObjectId)),
  }),
}), deleteCard);

router.put('/:cardId/likes', celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().trim().required().pattern(new RegExp(regExpObjectId)),
  }),
}), addLike);

router.delete('/:cardId/likes', celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().trim().required().pattern(new RegExp(regExpObjectId)),
  }),
}), deleteLike);

module.exports = router;
