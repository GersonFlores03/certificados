const { check } = require("express-validator")
const validateResult = require("../utils/validate")


const RegisterUsersValidate = [
    check("nombre", "Error en el campo de username")
        .exists()
        .withMessage("El nombre debe existir")
        .notEmpty()
        .withMessage("El nombre no debe estar vacio")
        .isString()
        .withMessage("El nombre debe ser string")
        .isLength({ min: 10, max: 30 })
        .withMessage("El nombre debe tener un longitud de 10 y 30 caracteres."),
    check("email", "Error en el correo electronico")
        .exists()
        .withMessage("El correo electronico debe existir")
        .notEmpty()
        .withMessage("El correo electronico no debe estar vacio")
        .isString()
        .withMessage("El correo electronico debe ser un string")
        .isEmail()
        .withMessage("El correo debe tener formato de correo electrónico")
        .isLength({ min: 7, max: 70 })
        .withMessage("El correo electronico debe tener un longitud de 7 y 50 caracteres."),
    check("password", "Error en el la contraseña ")
        .exists()
        .withMessage("La contraseña debe existir")
        .notEmpty()
        .withMessage("La contraseña no debe ser nulo")
        .isString()
        .withMessage("La contraseña debe ser string")
        .isLength({ min: 8 })
        .withMessage("La contraseña debe tener un longitud de 8 caracteres."),
    (req, res, next) => {
        validateResult(req, res, next)
    }

];


const LoginUsersValidate = [
    check("email", "Error en el correo electronico")
        .exists()
        .withMessage("El correo electronico debe existir")
        .notEmpty()
        .withMessage("El correo electronico no debe estar vacio")
        .isString()
        .withMessage("El correo electronico debe ser un string")
        .isLength({ min: 7, max: 70 })
        .withMessage("El correo electrónico debe tener un longitud de 7 y 50 caracteres.")
        .isEmail()
        .withMessage("El correo debe tener formato de correo electronico"),

    check("password", "Error en el la contraseña ")
        .exists()
        .withMessage("La contraseña debe existir")
        .notEmpty()
        .withMessage("La contraseña no debe ser nulo")
        .isString()
        .withMessage("La contraseña debe ser string")
        .isLength({ min: 8 })
        .withMessage("La contraseña debe tener un longitud de 8 caracteres."),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]



const createOrderVentas = [
    check("dni", "Error en el docuemento de identidad")
        .exists()
        .withMessage("El dni debe existir")
        .notEmpty()
        .withMessage("El dni no debe estar vacio")
        .isString()
        .withMessage("El dni debe ser un caracter")
        .isLength({ min: 8 })
        .withMessage("La dni debe tener un longitud de 8 caracteres."),
    check("ruc", "Error en el ruc")
        .exists()
        .withMessage("El ruc debe existir")
        .notEmpty()
        .withMessage("El ruc no debe estar vacio")
        .isString()
        .withMessage("El ruc debe ser un caracter")
        .isLength({ min: 8 })
        .withMessage("La ruc debe tener un longitud de 11 caracteres."),
    check("email", "Error en el correo electronico")
        .exists()
        .withMessage("El correo electronico debe existir")
        .notEmpty()
        .withMessage("El correo electronico no debe estar vacio")
        .isString()
        .withMessage("El correo electronico debe ser un string")
        .isLength({ min: 7, max: 70 })
        .withMessage("El correo electrónico debe tener un longitud de 7 y 50 caracteres.")
        .isEmail()
        .withMessage("El correo debe tener formato de correo electronico"),
    check("direccion", "Error en la direccion")
        .exists()
        .withMessage("La direccion debe existir")
        .isString()
        .withMessage("La direccion debe ser un caracter")
        .notEmpty()
        .withMessage("El campo direccion no debe estar vacio"),
    check("nombre", "Error en el campo nombre")
        .exists()
        .withMessage("El nombre debe existir")
        .isString()
        .withMessage("El nombre debe ser un caracter")
        .notEmpty()
        .withMessage("El campo nombre no debe estar vacio"),
    check("apellido", "Error en el campo apellido")
        .exists()
        .withMessage("El apellido debe existir")
        .isString()
        .withMessage("El apellido debe ser un caracter")
        .notEmpty()
        .withMessage("El campo apellido no debe estar vacio"),
    check("telefono", "Error en el campo teléfono")
        .exists()
        .withMessage("El teléfono debe existir")
        .isString()
        .withMessage("El teléfono debe ser un caracter")
        .notEmpty()
        .withMessage("El campo teléfono no debe estar vacio")
        .isLength({ min: 9 })
        .withMessage("El teléfono debe tener un longitud de 9 caracteres"),
    check("imagen", "Error en el campo imagen")
        .exists()
        .withMessage("La imagen importada debe existir")
        .notEmpty()
        .withMessage("La importacion del archivo no debe estar vacio"),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]









module.exports = {
    RegisterUsersValidate,
    LoginUsersValidate,
    createOrderVentas
}