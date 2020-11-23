const mongoose = require('mongoose');
const { validationUrl } = require('../helpers/validation');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator(url) {
        return validationUrl(url);
      },
      message: 'Ошибка',
    },
  },
});

module.exports = mongoose.model('user', userSchema);
