// Importing Modules/Packages
const { getTablesFrom, transporter, companyDB } = require('../../database/database');
const { resMsg, handleAndLogError, tableName } = require('./helper');
const { email } = require('../../database/Emails');
const mail = require('express').Router();
const mailgen = require('mailgen');
const date = new Date();


// Setting up Email Settings that the user will receive
function initMailGen(name, companyinfo) {
    console.log(name)
    let mailGenerator = new mailgen({
        theme: 'default',
        product: {
            name: name,
            link: companyinfo.Website,
            logo: '/IMG/Social Media Icons & Logos/Palmer_Logo.webp',
            copyright: `copyright 2022 Nazir Knuckles Inc | ${date.getFullYear()} | ${companyinfo.CompanyName}`
        }
    });
    return mailGenerator;
}


// Preparing to send to user or company
async function prepareEmail(userData) {
    try {
        const companyinfo = await getTablesFrom(tableName[2], companyDB);
        if(userData.id == 3) {
            sendEmail(getEmailForCompany(companyinfo[0], userData));
        }
        else {
            sendEmail(getEmailForUser(companyinfo[0], userData));
        }
    }
    catch(error) {
        handleAndLogError('prepareEmail', error, 1);
    }
}


// Retreives the Email Template, and Sends to the User
function getEmailForUser(companyinfo, userData) {
    const mailGenerator = initMailGen(companyinfo.CompanyName, companyinfo);
    return ({
        from: `${companyinfo.CompanyName} <${process.env.SMTP_EMAIL_1}>`,
        to: userData.Email,
        subject: `Two-Step Verification for Your ${companyinfo.CompanyName} Account`,
        html: mailGenerator.generate(email(companyinfo, userData)),
    })
}


// Retreives Email Template
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
async function sendEmail(generatedMail) {
    try {
        const response = await transporter.sendMail(generatedMail);
        console.log(`${resMsg[5]} ${response.messageId}`);
        return `${resMsg[5]} ${response.messageId}`;
    }
    catch(error) {
        handleAndLogError('sendEmail', error, 1);
    }
}


// Exporting Modules
module.exports = { getEmailForUser, getEmailForCompany, prepareEmail, mail }