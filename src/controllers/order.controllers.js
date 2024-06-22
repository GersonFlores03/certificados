const db = require("../database/models/index")
//const transmport = require("../lib/nodemailer")
const Producto = db.Producto
const Order = db.Order
const User = db.User
const transmport = require("../lib/nodemailer")


const getOrder = async (req, res) => {
   try {
      const getOrders = await Order.findAll()
      res.status(200).json(getOrders)
   } catch (error) {
      res.status(404).json(error)
   }
}


const getOrdenDetalle = async (req, res) => {
   try {
      
      const responseDetalle = await Order.findAll({
        
         include: [

            {
              model: User,
              where: { id: req.user.id },
            },
           
            {
               model: Producto
            }

         ],
         order: [['createdAt', 'DESC']],
      })
        
      //if (responseDetalle.length > 0){
        // await sendOrderEmail(responseDetalle[0]);
      //}

      res.status(200).json(responseDetalle)
   } catch (error) {
      res.status(404).json(error)
   }
}



const createOrder = async (req, res) => {
   try {

  
      
      const { dni , ruc, email,direccion, nombre, apellido ,telefono} = req.body
      const productId = req.productId;
      const uploadedFilePath = req.file.path;
    
      const newOrden = new Order({
         dni,
         ruc,
         email,
         direccion,
         nombre,
         apellido,
         telefono,
         imagen: uploadedFilePath,
         user_id: req.user.id,
         producto_id: productId
      })
  
      await newOrden.save()

      //const orderWithDetails = await Order.findOne({
         //where: { id: newOrden.id },
         //include: [
           //{ model: User, where: { id: req.user.id } },
           //{ model: Producto }
         //]
       //});
   
      //await sendOrderEmail(orderWithDetails);
      
      res.json(newOrden)
   } catch (error) {
      res.status(404).json(error)
   }
}



module.exports = {
   getOrder,
   getOrdenDetalle,
   createOrder
}