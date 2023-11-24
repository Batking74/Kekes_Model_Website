const nodemailer = require('nodemailer');
const { createPool } = require('mysql2');
require('dotenv').config();

// Connecting Databases
const companyDB = configDatabase(process.env.DB1_NAME);
const userDB = configDatabase(process.env.DB2_NAME);
const storeDB = configDatabase(process.env.DB3_NAME);

// Authenticating with gmail to send emails to client
let transporter = nodemailer.createTransport({
    service: process.env.SMTP_SERVICE,
    auth: {
        user: process.env.SMTP_EMAIL_2,
        pass: process.env.SMTP_PASSWORD_2
    },
})


// Configuring Database
function configDatabase(DB_NAME) {
    return createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: DB_NAME,
    }).promise();
}


// Reads data from specified table and database
async function getTablesFrom(tableName, database) {
    const res = await database.execute(`SELECT * FROM ${tableName}`);
    return await res[0];
}


// Creates new Users Account
async function createNewUser(userData, database, tableName, colums) {
    return await database.execute(`INSERT INTO ${tableName}${colums}VALUES(${JSON.stringify(userData.Firstname)}, ${JSON.stringify(userData.Lastname)}, ${JSON.stringify(userData.Gender)}, ${JSON.stringify(userData.Email)}, ${JSON.stringify(userData.Username)}, ${JSON.stringify(userData.Password)}, ${JSON.stringify(userData.From)}, ${JSON.stringify(userData.Date)});`);
}


// Adds Users Contact Messages if they have an Account with Palmer Studios
async function addUserMSG(userData, database, tableName, colums) {
    return await database.execute(`INSERT INTO ${tableName}${colums}VALUES(${JSON.stringify(userData.Firstname)}, ${JSON.stringify(userData.Lastname)}, ${JSON.stringify(userData.UserMessage)}, ${JSON.stringify(userData.Date)});`);
}


module.exports = { companyDB, userDB, storeDB, transporter, getTablesFrom, createNewUser, addUserMSG }