const db = require("../database/models/index")
const transmport = require("../lib/nodemailer")
const Producto = db.Producto
const Order = db.Order
const User = db.User


const getOrder = async (req, res) => {
   try {
      const getOrders = await Order.findAll()
      res.status(200).json(getOrders)
   } catch (error) {
      res.status(404).json(error)
   }
}


async function sendOrderEmail(order) {
   const emailContent = `
     <h4>Datos de la orden de: ${order.User.nombre} </h4>
     <ul>
       <li>RUC: ${order.ruc}</li>
       <li>Fecha: ${order.fecha}</li>
       <li>Ciudad: ${order.ciudad}</li>
       <li>Dirección: ${order.direccion}</li>
       <li>Email: ${order.email}</li>
       <li>Usuario: ${order.User.nombre} $</li>
       <li>Producto: ${order.Producto.nombre} (ID: ${order.Producto.descripcion})</li>
     </ul>
   `;
 
   await transmport.sendMail({
     from: "xdhaber13@gmail.com", 
     to: "xdhaber12@gmail.com" , 
     subject: "Detalles de tu orden en eyncor erp",
     html: emailContent,
     text: "Encuentra los mejores productos en un a buena calidad",
   });
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
        
      if (responseDetalle.length > 0){
         await sendOrderEmail(responseDetalle[0]);
      }

      res.status(200).json(responseDetalle)
   } catch (error) {
      res.status(404).json(error)
   }
}



const createOrder = async (req, res) => {
   try {
        
      const { ruc, fecha, ciudad, direccion, email } = req.body
      const productId = req.productId;
      
      const newOrden = new Order({
         ruc,
         fecha,
         ciudad,
         direccion,
         email,
         user_id: req.user.id,
         producto_id: productId
      })
  
      await newOrden.save()
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