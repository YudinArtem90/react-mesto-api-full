const path = require('path');
const Card = require('../models/card');
const User = require('../models/user');

const cardsDataPath = path.join(__dirname, '..', 'data', 'cards.json');
const { getData, getError } = require(path.join(__dirname, '..', 'helpers', 'getData'));
const {
  Unauthorized, BadRequest, NotFoundError, Forbidden,
} = require('../helpers/errors');

module.exports.getCards = (req, res, next) => {
  Card.find({})
    .then((cards) => getData(res, cards))
    .catch((err) => {
      throw new NotFoundError('Ошибка при запросе карточки');
    })
    .catch(next);
};

module.exports.createCard = (req, res, next) => {
  const { name, link } = req.body;
  const { _id } = req.user;

  User.findById({ _id })
    .then((user) => {
      if (!user) {
        throw new Forbidden('Ошибка при создании карточки, пользователя не нашли в системе');
      }

      Card.create({ name, link, owner: user })
        .then((card) => getData(res, card))
        .catch((err) => {
          throw new NotFoundError('Ошибка при создании карточки');
        })
        .catch(next);
    })
    .catch((err) => {
      throw new NotFoundError('Ошибка, пользователь не найден.');
    })
    .catch(next);
};

module.exports.deleteCard = (req, res) => {
  const { cardId } = req.params;
  const userId = req.user._id;

  Card.findOneAndDelete({
    _id: cardId,
    'owner.0': userId,
  }, (err) => {
    if (err) {
      getError(res, { message: `Ошибка при удалении карточки, ${err}` }, err);
    }
    getData(res, { message: 'Карточка успешно удалена' });
  });
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
