const { transporter, companyDB, userDB, getTablesFrom, createNewUser, getEmailForCompany, getUserConformation } = require('./database.js');
const express = require('express');
const bcrypt = require('bcrypt');
const fs = require('fs');
const app = express();
const filePath = './public/HTML/';

// Routing is how an application/websites end points respond to client/computer requests
app.use(express.static('./public'));
app.use(express.json());

const api = [
    '/', // 0
    '/About', // 1
    '/FAQ',  // 2
    '/Contact',  // 3
    '/Palmerstore',  // 4
    '/Palmerstore/Page2', // 5
    '/Palmerstore/Page3', // 6
    '/Login', // 7
    '/Register', // 8
    '/Register/Account_Verification', // 9
    '/Register/Account_Verification/Account_Conformation', // 10
    '/ResetPassword', // 11
    '/ResetPassword/Conformation', // 12
    '/receiveEmails', // 13
    '/users', // 14
    '/companyinfo', // 15
];

const file = [
    'index.html',
    'About.html',
    'FAQ.html',
    'Contact.html',
    'Store/Store_1.html',
    'Store/Store_2.html',
    'Store/Store_3.html',
    'Login/Login.html',
    'Login/Registration.html',
    'Login/Account_Verification.html',
    'Login/Register_Conformation.html',
    'Login/Reset_Password.html',
    'Login/ResetPassword_Conformation.html'
];

const resMsg = [
    'Email will be sent to you shortly.',
    'Account Created Thank You!.',
    'GOT UR DATA!2',
    'YAYAYAYAYAYAYAY',
    'okaaay nazzz',
    `Email Sent!:`
];

const DBColumns = [
    '(FirstName, LastName, Gender, Email, Username, Password, State, Account_Created)'
]

for(let i = 0; i < file.length; i++) getReq(api[i], file[i]);

// Contact Page Routings
app.post(api[3], (req, res) => {
    const userData = req.body;
    sendMailToCompany(userData)
    bcrypt.hash(userData.Email, 10)
    .then(encryptedData => {
        sendResponse(res, encryptedData);
    })
    .catch(err => { console.log(err); });
})

// Register Account Page Routings
app.post(api[8], (req, res) => {
    if(req.body.id === 2) {
        createNewUser(req.body, userDB, process.env.TABLE_NAME2, DBColumns[0]);
        sendResponse(res, resMsg[0]);
    }
    else sendResponse(res, resMsg[1]);
    sendMailToUser(req.body);
})

// Reset Password Page Routings/Conformation
app.post(api[10], (req, res) => sendResponse(res, resMsg[2]));

// Receive Emails on new Content
app.post(api[11], (req, res) => {
    // if(req.body.email ===)
    sendResponse(res, resMsg[3]);
});
app.post(api[12], (req, res) => console.log('vyyy'));

app.get(api[14], (req, res) => {
    getTablesFrom(process.env.TABLE_NAME2, userDB)
    .then(data => sendResponse(res, data));
});

app.get(api[15], (req, res) => {
    getTablesFrom(process.env.TABLE_NAME1, companyDB)
    .then(data => res.json(data[0]))
    .catch(err => console.log(err));
})

function getReq(api, file) {
    app.route(api)
    .get((req, res) => {
        fs.readFile(`${filePath}${file}`, 'utf8', (err, HTML) => {
            if(err) throw err;
            else res.send(HTML);
        });
    })
}

function sendMailToCompany(userData) {
    getTablesFrom(process.env.TABLE_NAME1, companyDB)
    .then(() => {
        const mailFromCompany = getEmailForCompany(userData);
        sendEmail(mailFromCompany);
    })
    .catch(err => console.log(err));
}

function sendMailToUser(userData) {
    getTablesFrom(process.env.TABLE_NAME1, companyDB)
    .then(companyInfo => {
        const mailFromUser = getUserConformation(companyInfo[0], userData);
        sendEmail(mailFromUser);
    })
    .catch(err => console.log(err));
}

function sendEmail(email) {
    transporter.sendMail(email)
    .then(res => console.log(`${resMsg[5]} ${res.messageId}`))
    .catch(err => console.log(err));
}
function sendResponse(res, msg) { res.send(JSON.stringify(msg)); }

// Palmer Studios Server
app.listen(process.env.COMPANY_PORT, (err) => {
    if(err) throw err;
    console.log(`Listening on port ${process.env.COMPANY_PORT} SUCCESS!!!`);
});