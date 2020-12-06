const path = require('path');
const Card = require('../models/card');
const checkErrors = require('../helpers/checkErrors');

const { getData } = require(path.join(__dirname, '..', 'helpers', 'getData'));
const { NotFoundError, Forbidden } = require('../helpers/errors');

module.exports.getCards = (req, res, next) => {
  Card.find({})
    .then((cards) => getData(res, cards))
    .catch((err) => next(checkErrors(err, next)));
};

module.exports.createCard = (req, res, next) => {
  const { name, link } = req.body;
  const { _id } = req.user;

  Card.create({ name, link, owner: _id })
    .then((card) => getData(res, card))
    .catch((err) => next(checkErrors(err, next)));
};

module.exports.deleteCard = (req, res, next) => {
  const { cardId } = req.params;
  const userId = req.user._id;

  Card.findById({ _id: cardId })
    .orFail(() => new NotFoundError('Карточки нет в базе.'))
    .then((card) => {
      if (card.owner.toString() !== userId.toString()) {
        throw new Forbidden('Нельзя удалить данную карточку, так как она создана не Вами.');
      }

      Card.findOneAndDelete({
        _id: cardId,
        owner: userId,
      })
        .then(() => getData(res, { message: 'Карточка успешно удалена' }))
        .catch(next);
    })
    .catch((err) => next(checkErrors(err, next)));
};

module.exports.addLike = (req, res, next) => {
  const userId = req.user._id;
  const { cardId } = req.params;

  Card.findByIdAndUpdate(
    cardId,
    { $addToSet: { likes: userId } },
    { new: true },
  )
    .orFail(() => new NotFoundError('Карточки нет в базе.'))
    .then((card) => getData(res, card))
    .catch((err) => next(checkErrors(err, next)));
};

module.exports.deleteLike = (req, res, next) => {
  const userId = req.user._id;
  const { cardId } = req.params;

  Card.find({ _id: cardId })
    .orFail(() => new NotFoundError('Карточки нет в базе.'))
    .then(() => {
      Card.find({
        likes: userId,
        _id: cardId,
      })
        .orFail(() => new NotFoundError('У данной карточки нет лайка поставленного Вами.'))
        .then(() => {
          Card.findByIdAndUpdate(
            cardId,
            { $pull: { likes: userId } },
            { new: true },
          )
            .then((deleteCard) => getData(res, deleteCard))
            .catch((err) => next(checkErrors(err)));
        })
        .catch(next);
    })
    .catch((err) => next(checkErrors(err, next)));
};
