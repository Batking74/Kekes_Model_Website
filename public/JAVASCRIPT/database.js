const nodemailer = require('nodemailer');
const sql = require('mysql2');
require('dotenv').config();

// Connecting to mySQL Database
const pool = sql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
}).promise();

// Authenticating with gmail to send emails from client
let transporter = nodemailer.createTransport({
    service: process.env.SMTP_SERVICE,
    auth: {
        user: process.env.SMTP_EMAIL_2,
        pass: process.env.SMTP_PASSWORD_2
    },
})

async function executeQuery(query) {
    const res = await pool.execute(query);
    return res[0];
}

module.exports = {pool, transporter, executeQuery};