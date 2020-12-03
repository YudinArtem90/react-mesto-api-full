const { NODE_ENV, JWT_SECRET } = process.env;

const getJwtSecret = () => (NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret');
module.exports = getJwtSecret;
