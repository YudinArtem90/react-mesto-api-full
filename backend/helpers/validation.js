const { regExpUrl } = require('./constants/index');

module.exports.validationUrl = (url) => {
  const regExp = new RegExp(regExpUrl, 'g');
  return regExp.test(url);
};
