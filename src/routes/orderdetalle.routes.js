const {Router} = require("express")
const { createDetallOrder, getDetalle } = require("../controllers/orderdetalle.controllers")
const { authRequired } = require("../middlewares/validateToken")

const orderDetalle = Router()
orderDetalle.get("/api/v1/detalle" , authRequired , getDetalle)
orderDetalle.post("/api/v1/detalle" , createDetallOrder)


module.exports = orderDetalle