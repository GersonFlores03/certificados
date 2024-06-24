const nodemailer = require("nodemailer")

const transport = nodemailer.createTransport({
    host: "mail.eyncor.pe",
    port: 587,
    secure: false,
    auth: {
        user: "certificado@eyncor.pe",
        pass: "PROpZ6rFqTyb"
    },

    tls: {
        rejectUnauthorized: false
    }

});


module.exports = transport;


/*
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

*/



