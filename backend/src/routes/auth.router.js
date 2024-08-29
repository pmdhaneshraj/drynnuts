const express = require('express');
const router = express.Router();
const controls = require('../controllers/auth.controller');

const { createUserWithMobile } = controls

router.route('/').post(createUserWithMobile)

module.exports = router