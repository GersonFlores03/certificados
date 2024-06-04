const servicesDetalle = require("../services/detalleservice.service")
const db = require("../database/models/index")
const OrderDetalle = db.OrderDetalle
const Order = db.Order
const Producto = db.Producto


const getDetalle = async (req, res) => {
    try {
        const responseDetalle = await OrderDetalle.findAll({
            include: [
                {
                    model:Producto
                },

                {
                    model:Order
                }

            ]
        })
        res.status(200).json(responseDetalle)
    } catch (error) {
        res.status(404).json(error)
    }
}



const createDetallOrder = async (req, res) => {

    try {
        const data = req.body
        const detalleOrden = await servicesDetalle.createService(data)
        res.status(201).json(detalleOrden)
    } catch (error) {
        res.status(404).json(error)
    }
}


module.exports = {
    getDetalle,
    createDetallOrder
}