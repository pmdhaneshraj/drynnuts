const { isEmpty } = require("lodash");
const moment = require("moment")
const { default: axios } = require("axios");

const User = require("../models/user.model");
const Order = require("../models/order.model");
const { getOrderId } = require("../utils/order.utli");

const orderController = {
  SHIP_TOKEN: '',
  fetchOrder: async (req, res) => {
    try {
      const { orderId } = req.query;
      const order = await Order.findOne({ orderId });
      if (order) {
        return res.json({ error: false, data: order })
      }

      return res.json({ error: true, data: 'Invalid Order ID' })
    } catch (error) {
      return res.json({ error: true, data: error.message })
    }
  },
  createOrder: async (req, res) => {
    try {
      const { userDetails, orderItems, totalPrice } = req.body;

      let user = await User.findOne({ mobileNumber: userDetails.mobileNumber });
      if (!user) {
        user = await User({ ...userDetails })
      }

      if (isEmpty(this.SHIP_TOKEN)) {
        const data = { email: process.env.SHIP_EMAIL, password: process.env.SHIP_PASSWORD }
        const response = await axios.post('https://apiv2.shiprocket.in/v1/external/auth/login', data);
        this.SHIP_TOKEN = response.data.token
      }

      const orders = await Order.find({ date: moment().format('yyyy-MM-DD') })
      const orderId = await getOrderId(orders.length + 1);

      const newOrder = await Order({ orderId, userId: user.id, orderItems, totalPrice, date: moment().format('yyyy-MM-DD') })
      await newOrder.save();

      user.orders.push(newOrder)
      await user.save();


      return res.status(201).json({ data: newOrder })
    } catch (error) {
      return res.status(error.code || 500).json({ error: true, data: error.message })
    }
  },
  updateOrder: async (req, res) => { }
}

module.exports = orderController