// Importing Modules/Packages
const { handleAndLogError } = require('../routes/helpers/helper');
const { createConnection } = require('mysql2');
const nodemailer = require('nodemailer');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

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
    if(process.env.JAWSDB_URL) {
        return createConnection(process.env.JAWSDB_URL).promise();
    }
    return createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: DB_NAME,
    }).promise();
}


// Reads data from specified table and database
async function getTablesFrom(tableName, database) {
    try {
        const res = await database.execute('SELECT * FROM ' + tableName);
        return await res[0];
    }
    catch(error) {
        handleAndLogError('getTablesFrom', error, 1);
    }
}


// Creates new Users Account
async function createNewUser(userData, database, tableName, colums) {
    try {
        const query = `INSERT INTO ${tableName} ${colums} VALUES(?, ?, ?, ?, ?, ?, ?, ?);`;
        const values = Object.values(userData);
        console.log(values)
        return await database.execute(query, JSON.stringify(values));
    }
    catch(error) {
        handleAndLogError('createNewUser', error, 1);
    }
}


// Updates Store database based on frontend conditions
async function updateDatabase(database, userData) {
    try {
        return await database.execute(`
            UPDATE products
            SET ?? = ?
            WHERE id = ?;`, [userData.column, userData.value, userData.id]);
    }
    catch(error) {
        handleAndLogError('updateDatabase', error, 1);
    }
}


// Adds Users Contact Messages if they have an Account with Palmer Studios
async function addUserMSG(userData, database, tableName, colums) {
    try {
        return await database.execute(`INSERT INTO ${tableName}${colums}VALUES(${JSON.stringify(userData.Firstname)}, ${JSON.stringify(userData.Lastname)}, ${JSON.stringify(userData.UserMessage)}, ${JSON.stringify(userData.Date)});`);
    }
    catch(error) {
        handleAndLogError('addUserMSG', error, 1);
    }
}


// Exporting Modules
module.exports = {
    companyDB,
    userDB,
    storeDB,
    transporter,
    getTablesFrom,
    updateDatabase,
    createNewUser,
    addUserMSG,
    PORT
}