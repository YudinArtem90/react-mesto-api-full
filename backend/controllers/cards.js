const path = require('path');

const Card = require('../models/card');

const cardsDataPath = path.join(__dirname, '..', 'data', 'cards.json');
const { getData, getError } = require(path.join(__dirname, '..', 'helpers', 'getData'));

module.exports.getCards = (req, res) => {
  Card.find({})
    .then((cards) => getData(res, cards))
    .catch((err) => getError(res, { message: `Ошибка при запросе карточки, ${err}` }, err));
};

module.exports.createCard = (req, res) => {
  const { name, link } = req.body;

  Card.create({ name, link })
    .then((card) => getData(res, card))
    .catch((err) => getError(res, { message: `Ошибка при создании карточки, ${err}` }, err));
};

module.exports.deleteCard = (req, res) => {
  const { cardId } = req.params;

  Card.findByIdAndRemove(cardId)
    .then((card) => getData(res, card))
    .catch((err) => getError(res, { message: `Ошибка при удалении карточки, ${err}` }, err));
};

module.exports.addLike = (req, res) => {
  const userId = req.user._id;
  const { cardId } = req.params;

  Card.findByIdAndUpdate(
    cardId,
    { $addToSet: { likes: userId } },
    { new: true },
  )
    .then((card) => getData(res, card))
    .catch((err) => getError(res, { message: `Ошибка при добавлении лайка, ${err}` }, err));
};

module.exports.deleteLike = (req, res) => {
  const userId = req.user._id;
  const { cardId } = req.params;

  Card.findByIdAndUpdate(
    cardId,
    { $pull: { likes: userId } },
    { new: true },
  )
    .then((card) => getData(res, card))
    .catch((err) => getError(res, { message: `Ошибка при удалении лайка, ${err}` }, err));
};
