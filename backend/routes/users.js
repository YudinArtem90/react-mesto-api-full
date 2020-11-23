const express = require('express');

const router = express.Router();
const path = require('path');
const {
  getUsers, getUserId, addUser, updateProfile, updateAvatar,
} = require('../controllers/users');

router.get('/', getUsers);

router.post('/', addUser);

router.get('/:id', getUserId);

router.patch('/me', updateProfile);

router.patch('/me/avatar', updateAvatar);

module.exports = router;
