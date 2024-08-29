const express = require('express');
const router = express.Router();
const controls = require('../controllers/user.controller');

const { createUserWithMobile, read } = controls

router.route('/').get(read).post(createUserWithMobile)

module.exports = router