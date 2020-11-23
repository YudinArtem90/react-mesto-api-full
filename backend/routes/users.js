const express = require('express');
const auth = require('../middlewares/auth');

const router = express.Router();
// eslint-disable-next-line import/order
const path = require('path');
const {
  getUsers, getUserId, addUser, updateProfile, updateAvatar, login,
} = require('../controllers/users');

router.post('/signin', login);

router.post('/signup', addUser);

router.use(auth);

router.get('users/', getUsers);

router.post('users/', addUser);

router.get('users/:id', getUserId);

router.patch('users/me', updateProfile);

router.patch('users/me/avatar', updateAvatar);

module.exports = router;
