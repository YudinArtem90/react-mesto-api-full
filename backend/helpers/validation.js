module.exports.validationUrl = (url) => {
  // eslint-disable-next-line no-useless-escape
  const regExp = /(http|https):\/\/([A-Za-z]|\.|[0-9]|\/|\#)+/g;
  regExp.test(url);
  return regExp.lastIndex === url.length;
};
