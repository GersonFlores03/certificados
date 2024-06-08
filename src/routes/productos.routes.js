const {Router} = require("express")
const { createProducts, getProductos, findRecentProduct, getProductID } = require("../controllers/productos.controllers")
const { authRequired } = require("../middlewares/validateToken")

const productRouter = Router()
productRouter.post("/api/v1/producto" , authRequired , createProducts)
productRouter.get("/api/v1/producto" , getProductID)
productRouter.get("/api/v1/producto/:id" , findRecentProduct)


module.exports = productRouter