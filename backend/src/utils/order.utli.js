const moment = require('moment')

exports.getOrderId = async (id) => {
  return `DNN${moment().format('yyyyMMDD')}${id}`
}