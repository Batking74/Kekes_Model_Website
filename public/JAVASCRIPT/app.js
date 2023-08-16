const { transporter, companyDB, userDB, getTablesFrom, createNewUser, getEmailForCompany, getUserConformation } = require('./database.js');
const express = require('express');
const filePath = './public/HTML/';
const bcrypt = require('bcrypt');
const fs = require('fs');
const app = express();

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
    'index.html', // 0
    'About.html', // 1
    'FAQ.html', // 2
    'Contact.html', // 3
    'Store/Store_1.html', // 4
    'Store/Store_2.html', // 5
    'Store/Store_3.html', // 6
    'Login/Login.html', // 7
    'Login/Registration.html', // 8
    'Login/Account_Verification.html', // 9
    'Login/Register_Conformation.html', // 10
    'Login/Reset_Password.html', // 11
    'Login/ResetPassword_Conformation.html' // 12
];

const resMsg = [
    'Email will be sent to you shortly.', // 0
    'Account Created Thank You!.', // 1
    'GOT UR DATA!2', // 2
    'YAYAYAYAYAYAYAY', // 3
    'okaaay nazzz', // 4
    'Email Sent!:', // 5
    'Thank You, you will recieve emails on new content!' // 6
];

const DBColumns = [
    '(FirstName, LastName, Gender, Email, Username, Password, State, Account_Created)',
    '(Message, Date_Sent)'
]

for(let i = 0; i < file.length; i++) getReq(api[i], file[i]);

// Contact Page Routings
app.post(api[3], async (req, res) => {
    try {
        sendMailToCompany(req.body);
        const encryptedData = await encryptData(req.body.Email);
        sendResponse(res, encryptedData);
    } catch(error) { console.log(error) }
})

app.post(api[8], (req, res) => {
    if(req.body.id === 2) createNewUser(req.body, userDB, process.env.TABLE_NAME2, DBColumns[0]);
    // else res.redirect('/Register/Account_Verification');
    sendMailToUser(req.body);
})

app.post(api[10], (req, res) => sendResponse(res, resMsg[2]));

app.post(api[11], (req, res) => {
    // if(req.body.email ===)
    sendResponse(res, resMsg[3]);
});
app.post(api[12], (req, res) => console.log('vyyy'));

app.get(api[13], (req, res) => {
    res.send('ok')
})

app.post(api[13], (req, res) => {
    console.log(req.body);
    sendResponse(res, resMsg[6]);
})

app.get(api[14], async (req, res) => {
    try {
        const data = await getTablesFrom(process.env.TABLE_NAME2, userDB);
        sendResponse(res, data);
    } catch(error) { console.log(error) }
});

app.get(api[15], async (req, res) => {
    try {
        const data = await getTablesFrom(process.env.TABLE_NAME1, companyDB);
        res.json(data[0]);
    } catch(error) { console.log(error) }
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

async function sendMailToCompany(userData) {
    const companyInfo = await getTablesFrom(process.env.TABLE_NAME1, companyDB)
    const mailFromCompany = getEmailForCompany(userData, companyInfo);
    sendEmail(mailFromCompany);
}

async function sendMailToUser(userData) {
    try {
        const companyInfo = await getTablesFrom(process.env.TABLE_NAME1, companyDB)
        const mailFromUser = getUserConformation(companyInfo[0], userData);
        sendEmail(mailFromUser);
    } catch(error) { console.log(error) }
}

async function sendEmail(email) {
    try {
        const response = await transporter.sendMail(email)
        console.log(`${resMsg[5]} ${response.messageId}`)
    } catch(error) { console.log(error) }
}
function sendResponse(res, msg) { res.send(JSON.stringify(msg)); }

async function encryptData(data) {
    try { return await bcrypt.hash(data, 10); } catch (error) { console.log(error) }
}
// Palmer Studios Server
app.listen(process.env.COMPANY_PORT, (err) => {
    if(err) throw err;
    console.log(`Listening on port ${process.env.COMPANY_PORT} SUCCESS!!!`);
});