const express = require('express');
const router = express.Router();
const controls = require('../controllers/product.controller');

const { getProducts, createProduct, createBulk, deleteProduct, updateProduct } = controls

router.route('/').get(getProducts).post(createProduct).delete(deleteProduct).put(updateProduct);
router.route('/all').post(createBulk);

module.exports = router;