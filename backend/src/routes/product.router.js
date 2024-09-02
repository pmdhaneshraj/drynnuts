const express = require('express');
const router = express.Router();
const controls = require('../controllers/product.controller');

const { getProducts, createProduct, createBulk, deleteProduct, updateProduct, deleteAll } = controls

router.route('/').get(getProducts).post(createProduct).delete(deleteProduct).put(updateProduct);
router.route('/all').post(createBulk).delete(deleteAll);

module.exports = router;