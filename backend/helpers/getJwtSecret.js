const { NODE_ENV, JWT_SECRET } = process.env;

const getJwtSecret = () => (NODE_ENV === 'production' ? JWT_SECRET : 'eb28135ebcfc17578f96d4d65b6c7871f2c803be4180c165061d5c2db621c51b');
module.exports = getJwtSecret;
