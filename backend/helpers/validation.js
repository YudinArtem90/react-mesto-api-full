const { regExpUrl, regExpEmail } = require('./constants/index');

module.exports.validationUrl = (url) => {
  const regExp = new RegExp(regExpUrl, 'g');
  return regExp.test(url);
};

module.exports.validationEmail = (email) => {
  const regExp = new RegExp(regExpEmail, 'g');
  return regExp.test(email);
};
