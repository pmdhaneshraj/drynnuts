const { isEmpty } = require('lodash');
const Product = require('../models/product.model');

const controls = {
  getProducts: async (req, res) => {
    try {
      const { category, type } = req.query;
      const filter = Object.assign({},
        category && { category },
        type && { type }
      )
      const data = await Product.find(filter)
      return res.json(data)
    } catch (error) {
      return res.json({ error })
    }
  },
  createProduct: async (req, res) => {
    try {
      const { name, type, category, url, priceList } = req.body;
      const product = new Product({
        name, type, category, url, priceList
      })
      await product.save();
      const data = await Product.find();
      return res.json({
        message: 'Product created successfully!',
        responseBody: data
      })
    } catch (error) {
      return res.json({ error })
    }
  },
  deleteProduct: async (req, res) => {
    try {
      const { id } = req.query;
      if (id) {
        await Product.findByIdAndDelete(id);
        const data = await Product.find();
        return res.json({
          message: 'Product deleted successfully!',
          responseBody: data
        })
      }
      throw new Error('Product ID is required')
    } catch (error) {
      return res.json({ error })
    }
  },
  updateProduct: async (req, res) => {
    try {
      const { id } = req.query;
      if (id) {
        await Product.findByIdAndUpdate(id, req.body);
        const data = await Product.findById(id);
        return res.json({
          message: 'Product updated successfully!',
          responseBody: data
        })
      }
      throw new Error('Product ID is required')
    } catch (error) {
      return res.json({ error: error.message })
    }
  },
  createBulk: async (req, res) => {
    try {
      const arr = req.body;
      return res.json('Product created successfully!')
    } catch (error) {
      return res.json({ error })
    }
  },
}

module.exports = controls;