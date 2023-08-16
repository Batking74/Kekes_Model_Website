const nodemailer = require('nodemailer');
const mailgen = require('mailgen');
const { createPool } = require('mysql2');
const { emailForCompany, userEmailConformation, resMsg } = require('./Emails');
require('dotenv').config();

// Connecting Databases
const companyDB = configDatabase(process.env.DB1_NAME);
const userDB = configDatabase(process.env.DB2_NAME);

// Authenticating with gmail to send emails from client
let transporter = nodemailer.createTransport({
    service: process.env.SMTP_SERVICE,
    auth: {
        user: process.env.SMTP_EMAIL_2,
        pass: process.env.SMTP_PASSWORD_2
    },
})

function configDatabase(DB_NAME) {
    return createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: DB_NAME,
    }).promise();
}

async function getTablesFrom(databaseName, database) {
    const res = await database.execute(`SELECT * FROM ${databaseName}`);
    return await res[0];
}

async function createNewUser(userData, database, DBName, colums) {
    return await database.execute(`INSERT INTO ${DBName}${colums}VALUES(${JSON.stringify(userData.Firstname)}, ${JSON.stringify(userData.Lastname)}, ${JSON.stringify(userData.Gender)}, ${JSON.stringify(userData.Email)}, ${JSON.stringify(userData.Username)}, ${JSON.stringify(userData.Password)}, ${JSON.stringify(userData.From)}, ${JSON.stringify(userData.Date)});`);
}

async function addUserMSG(userData, database, DBName, colums) {
    return await database.execute(`INSERT INTO ${DBName}${colums}VALUES(${JSON.stringify(userData.Firstname)}, ${JSON.stringify(userData.Lastname)}, ${JSON.stringify(userData.UserMessage)}, ${JSON.stringify(userData.Date)});`);
}

function initMailGen(name, companyinfo) {
    let mailGenerator = new mailgen({
        theme: 'default',
        product: {
            name: name,
            link: companyinfo.Website,
            logo: 'https://mailgen.js/img/logo.png',
            copyright: `copyright 2022 Nazir Knuckles Inc | ${date.getFullYear()} | ${companyInfo.CompanyName}`
        }
    });
    return mailGenerator;
}

function getUserConformation(companyInfo, userData) {
    const mailGenerator = initMailGen(companyInfo.CompanyName, companyInfo);
    return ({
        from: `${companyInfo.CompanyName} <${process.env.SMTP_EMAIL_1}>`,
        to: userData.Email,
        subject: resMsg[0],
        html: mailGenerator.generate(userEmailConformation(companyInfo, userData)),
        attachments: [
            {
                filename: 'Product_1.jpg',
                path: 'public/IMG/Store Products/Store 1/Product_1.jpg'
            }
        ]
    }
    )
}

function getEmailForCompany(userData, companyinfo) {
    const mailGenerator = initMailGen(userData.Firstname, companyinfo);
    return ({
        from: `${userData.Email} <${process.env.SMTP_EMAIL_1}>`,
        to: process.env.SMTP_EMAIL_2,
        subject: `${resMsg[1]} ${userData.Firstname} ${userData.Lastname}`,
        text: userData.UserMessage,
        html: mailGenerator.generate(emailForCompany(userData, companyinfo))
    });
}
module.exports = { companyDB, userDB, transporter, getTablesFrom, createNewUser, getUserConformation, getEmailForCompany };