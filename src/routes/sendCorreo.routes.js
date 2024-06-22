const {Router} = require("express")
const { createCorreo } = require("../controllers/correo.controllers")

const correoRouter = Router()
correoRouter.post("/api/v1/correo" , createCorreo )

module.exports = correoRouter