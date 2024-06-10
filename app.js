require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const cookiesParse = require("cookie-parser")
const authRouter = require("./src/routes/auth.routes")
const productRouter = require("./src/routes/productos.routes")
const orderRouter = require("./src/routes/order.routes")
const orderDetalle = require("./src/routes/orderdetalle.routes")
const path = require('path');
const FRONTEND_URL = process.env.FRONTEND_URL
const app = express()

const PORT = 3000

app.use(
    cors({
      origin: FRONTEND_URL,
      credentials: true,
    })
  );




app.use(express.json())
app.use(morgan("dev"))
app.use(cookiesParse())


app.get("/" , (req , res)=> {
    res.send("Welcome peticion get")
})

app.use(authRouter)
app.use(productRouter)
app.use(orderRouter)

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
  
app.listen(PORT , () => {
    console.log(`Welcome server${PORT}`)
})