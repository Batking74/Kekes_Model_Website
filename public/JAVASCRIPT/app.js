import { transporter, companyDB, userDB, getTablesFrom, createNewUser, getEmailForCompany, getEmailForUser }  from './database.js';
import express from 'express';
import bcrypt from 'bcrypt';
import fs from 'fs'
const filePath = './public/HTML/';
const app = express()

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
    '/ResetPassword/Reset_Password_Auth', // 12
    '/ResetPassword/Reset_Password_Auth/UpdatePassword', // 13
    '/ResetPassword/Reset_Password_Auth/UpdatePassword/Conformation', // 14
    '/receiveEmails', // 15
    '/users', // 16
    '/companyinfo', // 17
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
    'Login/Authentication.html', // 9
    'Login/Register_Conformation.html', // 10
    'Login/Reset_Password.html', // 11
    'Login/Authentication.html', // 12
    'Login/Change_Password.html', // 13
    'Login/Reset_Password_Complete.html', // 14
    'Login/ResetPassword_Conformation.html' // 15
];
const resMsg = [
    'Email will be sent to you shortly.', // 0
    'Account Created Thank You!.', // 1
    'GOT UR DATA!2', // 2
    'An email has been sent to', // 3
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
    sendMailToCompany(req.body);
    const encryptedData = await encryptData(req.body.Email);
    sendResponse(res, encryptedData);
})

app.post(api[8], (req, res) => {
    if(req.body.id === 1 && req.body.Answer == req.body.RandomNum) {
        delete res.body.RandomNum;
        delete res.body.Answer;
        console.log(res.body);
        createNewUser(req.body, userDB, process.env.TABLE_NAME2, DBColumns[0]);
    }
    sendMailToUser(req.body);
})

app.post(api[10], (req, res) => sendResponse(res, resMsg[2]));

app.post(api[11], (req, res) => {
    if(req.body.id == 6) sendMailToUser(req.body.Email);
    else {
        sendMailToUser(req.body);
        sendResponse(res, `${resMsg[3]} ${req.body} please verify...`);
    }
});
app.post(api[14], (req, res) => console.log('vyyy'));

app.post(api[15], (req, res) => {
    sendMailToUser(req.body);
    sendResponse(res, resMsg[6]);
})

app.get(api[16], async (req, res) => {
    const data = await getTablesFrom(process.env.TABLE_NAME2, userDB);
    sendResponse(res, data);
});

app.get(api[17], async (req, res) => {
    const data = await getTablesFrom(process.env.TABLE_NAME1, companyDB);
    res.json(data[0]);
})

async function sendMailToCompany(userData) { prepareEmail(userData) }
async function sendMailToUser(userData) { prepareEmail(userData) }
async function prepareEmail(userData) {
    const companyinfo = await getTablesFrom(process.env.TABLE_NAME1, companyDB);
    const companyEmail = getEmailForUser(companyinfo[0], userData);
    sendEmail(companyEmail);
}

async function sendEmail(email) {
    const response = await transporter.sendMail(email);
    console.log(`${resMsg[5]} ${response.messageId}`);
}
function sendResponse(res, msg) { res.send(JSON.stringify(msg)); }

async function encryptData(data) { return await bcrypt.hash(data, 10); }

function getReq(api, file) {
    app.route(api)
    .get((req, res) => {
        fs.readFile(`${filePath}${file}`, 'utf8', (err, HTML) => {
            if(err) throw err;
            else res.send(HTML);
        });
    })
}

// Palmer Studios Server
app.listen(process.env.COMPANY_PORT, (err) => {
    if(err) throw err;
    console.log(`Listening on port ${process.env.COMPANY_PORT} SUCCESS!!!`);
});