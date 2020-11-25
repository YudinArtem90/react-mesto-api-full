const { regExpUrl } = require('./constants/index');

module.exports.validationUrl = (url) => {
  const regExp = new RegExp(regExpUrl, 'g');
  regExp.test(url);
  return regExp.lastIndex === url.length;
};
