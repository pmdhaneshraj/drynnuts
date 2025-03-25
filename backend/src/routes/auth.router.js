const express = require('express');
const router = express.Router();
const { createUserWithMobile, getOtp, verifyOtp } = require('../controllers/auth.controller');

router.route('/').get(getOtp).post(verifyOtp)

module.exports = router