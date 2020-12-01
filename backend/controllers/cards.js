const path = require('path');
const Card = require('../models/card');
const User = require('../models/user');

const cardsDataPath = path.join(__dirname, '..', 'data', 'cards.json');
const { getData } = require(path.join(__dirname, '..', 'helpers', 'getData'));
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

      Card.create({ name, link, owner: _id })
        .then((card) => getData(res, card))
        .catch(next);
    })
    .catch((err) => {
      throw new NotFoundError('Ошибка, пользователь не найден.');
    })
    .catch(next);
};

module.exports.deleteCard = (req, res, next) => {
  const { cardId } = req.params;
  const userId = req.user._id;

  Card.findById({ _id: cardId })
    .then((card) => {
      if (card) {
        Card.findOneAndDelete({
          _id: cardId,
          owner: userId,
        })
          .then((deleteCard) => {
            if (deleteCard) {
              getData(res, { message: 'Карточка успешно удалена' });
            } else {
              throw new Forbidden('Нет прав на удаление карточки.');
            }
          })
          .catch(next);
      } else {
        throw new NotFoundError('Карточка не найдена в базе.');
      }
    })
    .catch(next);
};

module.exports.addLike = (req, res, next) => {
  const userId = req.user._id;
  const { cardId } = req.params;

  Card.findByIdAndUpdate(
    cardId,
    { $addToSet: { likes: userId } },
    { new: true },
  )
    .then((card) => {
      getData(res, card);
    })
    .catch((err) => {
      throw new NotFoundError('Ошибка при добавлении лайка.');
    })
    .catch(next);
};

module.exports.deleteLike = (req, res, next) => {
  const userId = req.user._id;
  const { cardId } = req.params;

  Card.find({ _id: cardId })
    .then((card) => {
      if (!card.length) {
        throw new NotFoundError('Карточки нет в базе.');
      } else {
        Card.find({
          likes: userId,
          _id: cardId,
        })
          .then((arrayCard) => {
            if (arrayCard.length) {
              Card.findByIdAndUpdate(
                cardId,
                { $pull: { likes: userId } },
                { new: true },
              )
                .then((deleteCard) => {
                  getData(res, deleteCard);
                })
                .catch((err) => {
                  throw new NotFoundError('Ошибка при удалении лайка.');
                })
                .catch(next);
            } else {
              throw new NotFoundError('У данно карточки нет лайка поставленного Вами.');
            }
          })
          .catch(next);
      }
    })
    .catch(next);
};
