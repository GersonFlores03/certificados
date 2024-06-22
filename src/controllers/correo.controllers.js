const db = require("../database/models/index")
const transmport = require("../lib/nodemailer")
const Correo = db.Correo


const createCorreo = async (req, res) => {
    try {

        transmport.sendMail({
            from: "certificado@eyncor.pe",
            to: ["soporte8@eyncor.pe" , "ventas@eyncor.com" , "eduarcordova@eyncor.com"],
            subject: "EYNCOR ERP PRUEBA",
            html: "<h4> Bienvenidos a EYNCOR ERP </h4>",
            text: "Prueba de correo"

        })

        const data = req.body
        const creacionCorreo = await Correo.create(data)
        res.status(201).json(creacionCorreo)

    } catch (error) {
        res.status(404).json(error)
    }
}


module.exports = {
    createCorreo
}