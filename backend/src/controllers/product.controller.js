const { isEmpty } = require('lodash');
const Product = require('../models/product.model');

const controls = {
  getProducts: async (req, res) => {
    try {
      const { category, type } = req.query;
      const data = isEmpty(category) && isEmpty(type) ? await Product.find() : await Product.find({ category, type });
      res.json(data)
    } catch (error) {
      res.json({ error })
    }
  },
  createProduct: async (req, res) => {
    try {
      const { name, type, category, url, price } = req.body;
      const product = new Product({
        name, type, category, url, price
      })
      await product.save();
      const data = await Product.find();
      res.json({
        message: 'Product created successfully!',
        responseBody: data
      })
    } catch (error) {
      res.json({ error })
    }
  },
  deleteProduct: async (req, res) => {
    try {
      const { id } = req.query;
      await Product.findByIdAndDelete(id);
      const data = await Product.find();
      res.json({
        message: 'Product deleted successfully!',
        responseBody: data
      })
    } catch (error) {
      res.json({ error })
    }
  },
  updateProduct: async (req, res) => {
    try {
      const { id } = req.query;
      await Product.findByIdAndUpdate(id, req.body);
      const data = await Product.find();
      res.json({
        message: 'Product updated successfully!',
        responseBody: data
      })

    } catch (error) {
      res.json({ error })
    }
  },
  createBulk: async (req, res) => {
    try {
      const arr = req.body;
      console.log({ body: req.body, arr })
      res.json('Product created successfully!')
    } catch (error) {
      res.json({ error })
    }
  },
}

module.exports = controls;