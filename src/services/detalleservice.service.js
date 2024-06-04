const db = require("../database/models/index")
const OrderDetalle = db.OrderDetalle
const Order = db.Order
const Producto = db.Producto


class servicesDetalle {
  
  static async createService(data) {
    try {

      const createService = await OrderDetalle.create(data)
      return createService
    } catch (error) {
      throw error
    }

  }


}




module.exports = servicesDetalle