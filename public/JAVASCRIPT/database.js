import { email, resMsg } from './Emails.js';
import nodemailer from 'nodemailer'
import mailgen from 'mailgen';
import { createPool } from 'mysql2';
import {} from 'dotenv/config';
const date = new Date();

// Connecting Databases
export const companyDB = configDatabase(process.env.DB1_NAME);
export const userDB = configDatabase(process.env.DB2_NAME);

// Authenticating with gmail to send emails from client
export let transporter = nodemailer.createTransport({
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

export async function getTablesFrom(databaseName, database) {
    const res = await database.execute(`SELECT * FROM ${databaseName}`);
    return await res[0];
}

export async function createNewUser(userData, database, DBName, colums) {
    return await database.execute(`INSERT INTO ${DBName}${colums}VALUES(${JSON.stringify(userData.Firstname)}, ${JSON.stringify(userData.Lastname)}, ${JSON.stringify(userData.Gender)}, ${JSON.stringify(userData.Email)}, ${JSON.stringify(userData.Username)}, ${JSON.stringify(userData.Password)}, ${JSON.stringify(userData.From)}, ${JSON.stringify(userData.Date)});`);
}

export async function addUserMSG(userData, database, DBName, colums) {
    return await database.execute(`INSERT INTO ${DBName}${colums}VALUES(${JSON.stringify(userData.Firstname)}, ${JSON.stringify(userData.Lastname)}, ${JSON.stringify(userData.UserMessage)}, ${JSON.stringify(userData.Date)});`);
}

function initMailGen(name, companyinfo) {
    let mailGenerator = new mailgen({
        theme: 'default',
        product: {
            name: name,
            link: companyinfo.Website,
            logo: 'https://mailgen.js/img/logo.png',
            copyright: `copyright 2022 Nazir Knuckles Inc | ${date.getFullYear()} | ${companyinfo.CompanyName}`
        }
    });
    return mailGenerator;
}

export function getEmailForUser(companyinfo, userData) {
    const mailGenerator = initMailGen(companyinfo.CompanyName, companyinfo);
    return ({
        from: `${companyinfo.CompanyName} <${process.env.SMTP_EMAIL_1}>`,
        to: userData.Email,
        subject: email(companyinfo, userData).body.intro,
        html: mailGenerator.generate(email(companyinfo, userData)),
        attachments: [{
            filename: 'Product_1.jpg',
            path: 'public/IMG/Store Products/Store 1/Product_1.jpg'
        }]
    })
}

export function getEmailForCompany(userData, companyinfo) {
    const mailGenerator = initMailGen(userData.Firstname, companyinfo);
    return ({
        from: `${userData.Email} <${process.env.SMTP_EMAIL_1}>`,
        to: process.env.SMTP_EMAIL_2,
        subject: `${resMsg[1]} ${userData.Firstname} ${userData.Lastname}`,
        text: userData.UserMessage,
        html: mailGenerator.generate(email(userData, companyinfo))
    });
}