const { default: axios } = require("axios");
const Ship = require("../models/ship.model");
const { isExpired } = require("../utils/ship.util");

const shipController = {
  auth: async () => {
    try {
      let shipment = await Ship.find();
      let shipId;
      const data = { email: process.env.SHIP_EMAIL, password: process.env.SHIP_PASSWORD }
      const response = await axios.post('https://apiv2.shiprocket.in/v1/external/auth/login', data);
      const token = response.data.token;

      if (!shipment || shipment.length === 0) {
        const newShip = await new Ship({ token })
        await newShip.save()
        shipId = newShip.id
      } else {
        shipId = shipment[0].id
        await Ship.findByIdAndUpdate(shipId, { token, created })
      }
      return token
    } catch (error) {
      console.error("Auth error:", error);
      throw new Error("Failed to authenticate with Shiprocket");
    }
  },
  logout: async () => {
    try {
      const shipment = await Ship.find();
      const token = shipment[0].token
      await axios.post('https://apiv2.shiprocket.in/v1/external/auth/logout', null, { headers: { Authorization: `Bearer ${token}` } });
    } catch (error) {
    }
  },
  createShipment: async (req, res) => {
    try {
      const { order_id } = req.params
      const shipment = await Ship.find();
      const order = await Order.findOne({ order_id })
      let shipToken = '';

      if (!shipment || shipment.length === 0 || isExpired(shipment[0].updatedAt)) {
        shipToken = await shipController.auth()
      } else {
        shipToken = shipment[0].token
      }



      return res.json({ shipToken })
    } catch (error) {
      return res.json(error.message)

    }
  },
  trackOrder: async (req, res) => { }
};

module.exports = shipController