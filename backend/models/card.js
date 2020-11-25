const mongoose = require('mongoose');
const user = require('./user');

const { Schema } = mongoose;
const { validationUrl } = require('../helpers/validation');

const cardSchema = Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  likes: [{
    type: Schema.Types.ObjectId,
    default: [],
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  link: {
    type: String,
    required: true,
    validate: {
      validator(url) {
        return validationUrl(url);
      },
      message: 'Ошибка валидации url в cardSchema',
    },
  },
  owner: [{
    type: Schema.Types.ObjectId,
    ref: 'user',
    require: true,
  }],
});

module.exports = mongoose.model('card', cardSchema);
