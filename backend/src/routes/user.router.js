const express = require('express');
const router = express.Router();
const controls = require('../controllers/user.controller');

const { getUser, getAllUsers, createUser } = controls

router.route('/').get(getUser).post(createUser);
router.route('/all').get(getAllUsers)

module.exports = router