const db = require("../database/models/index")
const transmport = require("../lib/nodemailer")
//const { Resend } = require("resend")
const Correo = db.Correo

//const resend = new Resend("re_j3c3GH8A_NGLuBdLAUXBTbUqwWT82rvhT");



const getCorreo = async (req, res) => {
    try {
        const response = await Correo.findAll()
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json(error)
    }
}



const createCorreo = async (req, res) => {

    try {
        const { ruc, nombre, telefono, comentario } = req.body

      
        const htmlContent = `
        <html>
        <head>
            <style>
                /* Estilos para mejorar la presentación */
                body {
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                    background-color: #f4f4f4;
                    padding: 20px;
                }
                h1 {
                    color: #333;
                    border-bottom: 2px solid #333;
                    padding-bottom: 5px;
                }
                p {
                    margin: 10px 0;
                }
                strong {
                    font-weight: bold;
                }
            </style>
        </head>
        <body>
            <h3>Datos del Emisor</h3>
            <p><strong>RUC:</strong> ${ruc}</p>
            <p><strong>Nombres y Apellidos:</strong> ${nombre}</p>
            <p><strong>Teléfono:</strong> ${telefono}</p>
            <p><strong>Comentario:</strong> ${comentario}</p>
        </body>
        </html>
    `;


        const textContent = `
        Bienvenidos a EYNCOR ERP
        RUC: ${ruc}
        Nombre: ${nombre}
        Teléfono: ${telefono}
        Comentario: ${comentario}
    `;

        await transmport.sendMail({
            from: "certificado@eyncor.pe",
            to: [ "eyncor8@gmail.com" , "ventas@eyncor.com", "soporte8@eyncor.pe" ,],
            subject: "Reserva de Cliente",
            html: htmlContent,
            text: textContent
        }, (error, info) => {
            if (error) {
                console.log('Error occurred: ' + error.message);
            } else {
                console.log('Message sent: ' + info.response);
            }
        });

        const createCorreo = await Correo.create(req.body)
        res.status(201).json(createCorreo)

    } catch (error) {
        res.status(404).json(error)
    }
}


module.exports = {
    getCorreo,
    createCorreo
}