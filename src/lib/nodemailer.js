const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
    host: 'mail.eyncor.pe',
    port: 587, 
    secure: false, 
    auth: {
        user: 'certificado@eyncor.pe',
        pass: 'PROpZ6rFqTyb' 
    },

    tls: {
        rejectUnauthorized: false
    },



    logger: true, 
    debug: true 
    
});


module.exports = transporter  ;



/*


--Prueba de ethrel para correos

let transporter = nodemailer.createTransport({
    host: 'mail.eyncor.pe',
    port: 587,
    secure: false, // false si no es un servidor seguro
    auth: {
        user: 'certificado@eyncor.pe',
        pass: 'TuContraseñaAqui' // Utiliza la contraseña de tu cuenta de correo electrónico
    }
});







let transporter = nodemailer.createTransport({
    host: 'mail.eyncor.pe',
    port: 465, 
    secure: true, 
    auth: {
        user: 'certificado@eyncor.pe',
        pass: 'PROpZ6rFqTyb' 
    },
    logger: true, 
    debug: true 
});




 service : hotmail,
        auth : {
            user : yourusername@outlook.com,
            pass : yourpassword
        }




let transport = nodemailer.createTransport({
    host:"mail.eyncor.pe",
    port: 143,
    secure: false,
    auth: {
        user: "certificado@eyncor.pe",
        pass: "PROpZ6rFqTyb"
    },


});









const transmport = nodemailer.createTransport({
    host: "mail.eyncor.com",
    port: 465,
    secure: true,
    auth: {
        user: "certificado@eyncor.pe",
        pass: "PROpZ6rFqTyb"
    },


});

*/



/*
const transmport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "xdhaber12@gmail.com",
        pass: "nfcwcedpykznrxde"
    },
    tls: {
        rejectUnauthorized: false
    }
});






const transmport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "xdhaber12@gmail.com",
        pass: "nfcwcedpykznrxde"
    }
});




------Mis script para generar el correo de eyncor test 6

const transmport = nodemailer.createTransport({
    host: 'mail.eyncor.pe',
    port: 465,
    secure: true, 
    auth: {
        user: "soporte8@eyncor.pe",
        pass: "owjIKbVsg7f6"
    },

   
    
});





*/



