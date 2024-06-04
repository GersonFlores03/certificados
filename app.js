require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const multer = require("multer")
const path = require('path');
const cookiesParse = require("cookie-parser")
const authRouter = require("./src/routes/auth.routes")
const productRouter = require("./src/routes/productos.routes")
const orderRouter = require("./src/routes/order.routes")
const orderDetalle = require("./src/routes/orderdetalle.routes")
const db = require("./src/database/models/index")
const Archivo = db.Archivo
const FRONTEND_URL = process.env.FRONTEND_URL
const app = express()

const PORT = 3000

app.use(
    cors({
      origin: FRONTEND_URL,
      credentials: true,
    })
  );

  const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      const ext = path.extname(file.originalname);
      cb(null, file.fieldname + '-' + uniqueSuffix + ext);
    }
  });
  
  const upload = multer({ storage });


  app.post('/upload', upload.single('file'), async (req, res) => {
    const uploadedFilePath = req.file.path;

    try {
        await Archivo.create({ ruta: uploadedFilePath });
        res.send('Archivo enviado y su ruta almacenada en la base de datos');
    } catch (error) {
        console.error('Error creating Archivo record:', error);
        res.status(500).send('Error uploading file');
    }
  });




app.use(express.json())
app.use(morgan("dev"))
app.use(cookiesParse())


app.get("/" , (req , res)=> {
    res.send("Welcome peticion get")
})

app.use(authRouter)
app.use(productRouter)
app.use(orderRouter)
app.use(orderDetalle)

app.listen(PORT , () => {
    console.log(`Welcome server${PORT}`)
})