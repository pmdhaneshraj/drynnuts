const Product = require('../models/product.model');

const controls = {
  getProducts: async (req, res) => {
    try {
      const { category, type, id } = req.query;
      const filter = Object.assign({},
        category && { category },
        type && { type }
      )
      const data = id ? await Product.findById(id) : await Product.find(filter)
      return res.json(data)
    } catch (error) {
      return res.json({ error })
    }
  },
  createProduct: async (req, res) => {
    try {
      const { name, type, category, url, priceList } = req.body;
      const isExist = await Product.find({ name })
      if (isExist) {
        throw new Error('Product already exists!')
      }
      const product = new Product({ name, type, category, url, priceList })
      await product.save();
      const data = await Product.find();
      return res.json({
        message: 'Product created successfully!',
        responseBody: data
      })
    } catch (error) {
      return res.json({ error: error.message })
    }
  },
  createAll: async (req, res) => {
    try {
      const docs = req.body;
      // await Product.insertMany(docs)  // for precaution
      const data = await Product.find();
      return res.json({
        message: 'Product created successfully!',
        data
      })
    } catch (error) {
      return res.json({ error: error.message })
    }
  },
  updateProduct: async (req, res) => {
    try {
      const { id } = req.query;
      if (!id) {
        throw new Error('Product ID is required')
      }
      await Product.findByIdAndUpdate(id, req.body);
      const data = await Product.findById(id);
      return res.json({
        message: 'Product updated successfully!',
        responseBody: data
      })
    } catch (error) {
      return res.json({ error: error.message })
    }
  },
  deleteProduct: async (req, res) => {
    try {
      const { id } = req.query;
      if (!id) {
        throw new Error('Product ID is required')
      }
      await Product.findByIdAndDelete(id);
      const data = await Product.find();
      return res.json({
        message: 'Product deleted successfully!',
        responseBody: data
      })
    } catch (error) {
      return res.json({ error })
    }
  },
  deleteAll: async (req, res) => {
    try {
      // await Product.deleteMany() // For precautions
      const data = await Product.find();
      return res.json({
        message: 'Product deleted successfully!',
        data
      })
    } catch (error) {
      return res.json({ error: error.message })
    }
  }
}

module.exports = controls;