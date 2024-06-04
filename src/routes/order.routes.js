const { Router } = require("express")
const { createOrder, getOrder, getOrdenDetalle } = require("../controllers/order.controllers")
const { authRequired } = require("../middlewares/validateToken")


const orderRouter = Router()
orderRouter.get("/api/v1/orderdetalle/order", authRequired , getOrdenDetalle);
orderRouter.post("/api/v1/order",  authRequired , createOrder)


module.exports = orderRouter
