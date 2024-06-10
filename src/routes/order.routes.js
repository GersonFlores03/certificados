const { Router } = require("express")
const { createOrder, getOrder, getOrdenDetalle } = require("../controllers/order.controllers")
const { authRequired } = require("../middlewares/validateToken");
const { getProductID } = require("../controllers/productos.controllers");
const multer = require("multer")
const path = require('path');
const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      const ext = path.extname(file.originalname);
      cb(null, file.fieldname + '-' + uniqueSuffix + ext);
    }
  });
const upload = multer({ storage });

const orderRouter = Router()
orderRouter.get("/api/v1/orderdetalle/order", authRequired , getOrdenDetalle);
orderRouter.post("/api/v1/order",  authRequired , upload.single('imagen'), getProductID, createOrder)


module.exports = orderRouter
