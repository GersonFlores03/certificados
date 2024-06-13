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
   const imageUrl = `http://localhost:3000/${order.imagen}`;
   const emailContent = `
     <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
       <h2 style="color: #0066cc;">Detalles de la Orden</h2>
       <p><strong>Cliente:</strong> ${order.User.nombre}</p>
       <table style="width: 100%; border-collapse: collapse;">
         <tr style="background-color: #f2f2f2;">
           <th style="text-align: left; padding: 8px; border-bottom: 1px solid #ddd;">Documento de Identidad:</th>
           <td style="padding: 8px; border-bottom: 1px solid #ddd;">${order.dni}</td>
         </tr>
          <tr>
           <th style="text-align: left; padding: 8px; border-bottom: 1px solid #ddd;">Teléfono:</th>
           <td style="padding: 8px; border-bottom: 1px solid #ddd;">${order.telefono}</td>
         </tr>
         <tr style="background-color: #f2f2f2;">
           <th style="text-align: left; padding: 8px; border-bottom: 1px solid #ddd;">Ruc:</th>
           <td style="padding: 8px; border-bottom: 1px solid #ddd;">${order.ruc}</td>
         </tr>
         <tr>
           <th style="text-align: left; padding: 8px; border-bottom: 1px solid #ddd;">Correo electrónico:</th>
           <td style="padding: 8px; border-bottom: 1px solid #ddd;">${order.email}</td>
         </tr>
         <tr style="background-color: #f2f2f2;">
           <th style="text-align: left; padding: 8px; border-bottom: 1px solid #ddd;">Direccion de la empresa:</th>
           <td style="padding: 8px; border-bottom: 1px solid #ddd;">${order.direccion}</td>
         </tr>
         <tr>
           <th style="text-align: left; padding: 8px; border-bottom: 1px solid #ddd;"> Datos Completos: </th>
           <td style="padding: 8px; border-bottom: 1px solid #ddd;">${order.nombre} ${order.apellido}</td>
         </tr>
         <tr style="background-color: #f2f2f2;">
           <th style="text-align: left; padding: 8px; border-bottom: 1px solid #ddd;">Producto Adquirido:</th>
           <td style="padding: 8px; border-bottom: 1px solid #ddd;">${order.Producto.nombre}</td>
         </tr>
           <tr>
           <th style="text-align: left; padding: 8px; border-bottom: 1px solid #ddd;"> Descripcion de Producto: </th>
           <td style="padding: 8px; border-bottom: 1px solid #ddd;">${order.Producto.descripcion}</td>
         </tr>
          <tr style="background-color: #f2f2f2;">
           <th style="text-align: left; padding: 8px; border-bottom: 1px solid #ddd;">Precio incluye igv:</th>
           <td style="padding: 8px; border-bottom: 1px solid #ddd;">${order.Producto.precio}</td>
         </tr>
       </table>
     </div>
   `;
 
   await transmport.sendMail({
     from: "xdhaber13@gmail.com", 
     to: "xdhaber12@gmail.com", 
     subject: "Detalles de tu orden en eyncor erp",
     html: emailContent,
     text: "Encuentra los mejores productos en una buena calidad",
     attachments: [
      {
        filename: 'imagen.jpg',
        path: `${imageUrl}`
      }
    ]
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
        
      //if (responseDetalle.length > 0){
        // await sendOrderEmail(responseDetalle[0]);
      //}

      res.status(200).json(responseDetalle)
   } catch (error) {
      res.status(404).json(error)
   }
}



const createOrder = async (req, res , next) => {
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

      const orderWithDetails = await Order.findOne({
         where: { id: newOrden.id },
         include: [
           { model: User, where: { id: req.user.id } },
           { model: Producto }
         ]
       });
   
      await sendOrderEmail(orderWithDetails);
      
      res.json(newOrden)
   } catch (error) {
     next(error)
   }
}



module.exports = {
   getOrder,
   getOrdenDetalle,
   createOrder
}