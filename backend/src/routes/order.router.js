const express = require('express');
const router = express.Router();
const { createOrder, fetchOrder } = require('../controllers/order.controller');

router.route('/').get(fetchOrder).post(createOrder)

module.exports = router;