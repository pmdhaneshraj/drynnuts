const express = require('express');
const router = express.Router();
const controls = require('../controllers/product.controller');

const { getProducts, createProduct, createAll, deleteProduct, updateProduct, deleteAll } = controls

router.route('/').get(getProducts).post(createProduct).delete(deleteProduct).put(updateProduct);
router.route('/all').post(createAll).delete(deleteAll);

module.exports = router;