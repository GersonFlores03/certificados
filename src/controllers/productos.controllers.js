const db = require("../database/models/index")
const Producto = db.Producto


const findRecentProduct = async (req, res) => {
    const productId = req.params.id;
    try {
        const product = await Producto.findByPk(productId); 
    if (!product) {
      res.status(404).json({ message: 'Producto no encontrado' });
      return;
    }
    const responseProductId = product.id;
    res.status(200).json({
      message: 'ID del producto obtenido exitosamente',
      productId: product.id, 
    }).req.recentProductId = responseProductId;
    } catch (error) {
        res.status(500).json({ message: "Error al buscar el producto más reciente." });
    }
}




const createProducts = async (req, res) => {
    try {
        const data = req.body
        const response = await Producto.create(data)
        
        res.status(201).json(response)
       
    } catch (error) {
        res.status(404).json(error)
    }

}


const getProductID = async (req, res, next) => {
   try {
        const responseProduct = await Producto.findOne({
        order: [['createdAt', 'DESC']], // Ordenar por fecha de creación en orden descendente
    })
       req.productId = responseProduct.id;
       next();
   } catch (error) {
       res.status(404).json(error)
   }
}


const getProductos = async (req , res) => {
    try {
        const productos = await Producto.findAll()
        res.status(200).json(productos)
    } catch (error) {
        res.status(404).json(error)
    }
}



module.exports = {
    getProductos,
    findRecentProduct,
    createProducts,
    getProductID
}