const { getTablesFrom, transporter, companyDB } = require('../utils/database');
const { email } = require('../utils/Emails');
const { resMsg } = require('./helopers');
const mail = require('express').Router();
const mailgen = require('mailgen');
const date = new Date();


// Setting up Email Settings that the user will receive
function initMailGen(name, companyinfo) {
    let mailGenerator = new mailgen({
        theme: 'default',
        product: {
            name: name,
            link: companyinfo.Website,
            logo: '../public/IMG/Background_Images/Home_Background_IMG.png',
            copyright: `copyright 2022 Nazir Knuckles Inc | ${date.getFullYear()} | ${companyinfo.CompanyName}`
        }
    });
    return mailGenerator;
}


// Sends an Email to the Company
async function sendMailToCompany(userData) {
    prepareEmail(userData);
}


// Sends an Email to the User
async function sendMailToUser(userData) {
    prepareEmail(userData);
}


// Preparing to send to user or company
async function prepareEmail(userData) {
    try {
        const companyinfo = await getTablesFrom(process.env.TABLE_NAME1, companyDB);
        if(userData.id == 3) {
            sendEmail(getEmailForCompany(companyinfo[0], userData));
        }
        else {
            sendEmail(getEmailForUser(companyinfo[0], userData));
        }
    }
    catch(error) {
        console.log(error);
    }
}


// Retreives the Email Template, and Sends to the User
function getEmailForUser(companyinfo, userData) {
    const mailGenerator = initMailGen(companyinfo.CompanyName, companyinfo);
    return ({
        from: `${companyinfo.CompanyName} <${process.env.SMTP_EMAIL_1}>`,
        to: userData.Email,
        subject: `Message From ${companyinfo.CompanyName}`,
        html: mailGenerator.generate(email(companyinfo, userData)),
        attachments: [{
            filename: 'Product_1.jpg',
            path: 'public/IMG/Store Products/Store 1/Product_1.webp'
        }]
    })
}


// Retreives the Email Template
function getEmailForCompany(companyinfo, userData) {
    const mailGenerator = initMailGen(userData.Firstname, companyinfo);
    return ({
        from: `${userData.Email} <${process.env.SMTP_EMAIL_1}>`,
        to: process.env.SMTP_EMAIL_2,
        subject: `Message From ${userData.Firstname} on ${companyinfo.CompanyName} Contact Page!`,
        html: mailGenerator.generate(email(companyinfo, userData))
    });
}


// Sends Email to User or Company
async function sendEmail(email) {
    try {
        const response = await transporter.sendMail(email);
        console.log(`${resMsg[5]} ${response.messageId}`);
    }
    catch(error) {
        console.log(error);
    }
}

module.exports = { getEmailForUser, getEmailForCompany, sendMailToCompany, sendMailToUser, mail }