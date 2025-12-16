const express = require('express');
const router = express.Router();

const { createShipment } = require('../controllers/ship.controller');

router.route('/').post(createShipment)

module.exports = router