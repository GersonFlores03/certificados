const db = require("../database/models/index")
const transporter = require("../lib/nodemailer")
const Correo = db.Correo





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
        const { ruc, nombre, telefono, comentario } = req.body;

        const htmlContent = `
            <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; background-color: #f4f4f4; padding: 20px; }
                    h1 { color: #333; border-bottom: 2px solid #333; padding-bottom: 5px; }
                    p { margin: 10px 0; }
                    strong { font-weight: bold; }
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

       
        let info = await transporter.sendMail({
            from: 'certificado@eyncor.pe',
            to: ['joycepg276@gmail.com'],
            subject: 'Reserva de Cliente',
            html: htmlContent,
            text: textContent,
        });

        console.log('Message sent: ' + info.response);

     
        const createCorreo = await Correo.create(req.body);
        res.status(201).json(createCorreo);

    } catch (error) {
        res.status(404).json(error)
    }
}


module.exports = {
    getCorreo,
    createCorreo
}