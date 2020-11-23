const express = require('express');

const router = express.Router();
const path = require('path');
const {
  getUsers, getUserId, addUser, updateProfile, updateAvatar, login,
} = require('../controllers/users');

router.get('users/', getUsers);

router.post('users/', addUser);

router.get('users/:id', getUserId);

router.patch('users/me', updateProfile);

router.patch('users/me/avatar', updateAvatar);

router.post('/signin', login);

router.post('/signup', addUser);

module.exports = router;
