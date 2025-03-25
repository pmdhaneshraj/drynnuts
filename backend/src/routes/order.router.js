const express = require('express');
const router = express.Router();
const { createOrder, getOrderDetails } = require('../controllers/order.controller');

router.route('/').get(getOrderDetails).post(createOrder)

module.exports = router;