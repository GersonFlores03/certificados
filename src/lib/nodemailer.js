const nodemailer = require("nodemailer")

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

module.exports = transmport;