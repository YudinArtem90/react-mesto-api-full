// eslint-disable-next-line no-useless-escape
const regExpUrl = '^(http|https):\/\/([A-Za-z]|\.|[0-9]|\/|\#|\-|\_)+';
const regExpObjectId = '^[0-9a-fA-F]{24}$';
// eslint-disable-next-line no-useless-escape
const regExpEmail = '^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$';

module.exports = {
  regExpUrl,
  regExpObjectId,
  regExpEmail,
};
