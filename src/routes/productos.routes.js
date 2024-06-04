const {Router} = require("express")
const { createProducts, getProductos, findRecentProduct } = require("../controllers/productos.controllers")
const { authRequired } = require("../middlewares/validateToken")

const productRouter = Router()
productRouter.post("/api/v1/producto" , authRequired , createProducts)
productRouter.get("/api/v1/producto" , getProductos)
productRouter.get("/api/v1/producto/:id" , findRecentProduct)


module.exports = productRouter