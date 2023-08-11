const nodemailer = require('nodemailer');
const sql = require('mysql');
require('dotenv').config();

// Connecting to mySQL Database
const connection = sql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// Authenticating with gmail to send emails from client
let transporter = nodemailer.createTransport({
    service: process.env.SMTP_SERVICE,
    auth: {
        user: process.env.SMTP_EMAIL_2,
        pass: process.env.SMTP_PASSWORD_2
    },
})


module.exports = {connection, transporter};