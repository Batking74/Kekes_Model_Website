// Importing Modules/Packages
const { sendResponse, resMsg, handleAndLogError, tableName } = require('../helpers/helper');
const { prepareEmail } = require('../helpers/Email');
const register = require('express').Router();
const { hash } = require('bcrypt');
const path = require('path');


// Register Page Routes
register.route('/')
.get((req, res) => {
    res.sendFile(path.join(__dirname, '../../public/HTML/Login/Registration.html'), (error) => {
        if(error) {
            handleAndLogError('/', error, 0);
            res.status(500).send('Internal Server Error');
        }
    })
})
// Creates user accounts
.post(async (req, res) => {
    // Sanitize data
    if(req.body.id === 1 && req.body.Answer == req.body.RandomNum) {
        console.log(req.body);
        // createNewUser(req.body, companyDB, tableName[1], DBColumns[0]);
    }
    prepareEmail(req.body);
    const hashedNum = await hash(req.body.RandomNum, 10);
    sendResponse(res, { Name: 'VerificationCode', Hash: hashedNum });
})


// Registering User to Receive Emails
register.post('/ReceiveEmails', async (req, res) => {
    try {
        // Sanitize data
        prepareEmail(req.body);
        sendResponse(res, resMsg[6]);
    }
    catch(error) {
        handleAndLogError('/ReceiveEmails', error, 0)
        sendResponse(res, error);
    }
})


// Serves up Account Verification Page
register.get('/Account_Verification', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/HTML/Login/Register_Conformation.html'), (error) => {
        if(error) {
            handleAndLogError('/Account_Verification', error, 0);
            res.status(500).send('Internal Server Error');
        }
    })
})


// Serves up Account Created Confirmation Page
register.post('/Register/Account_Verification/Account_Conformation', (req, res) => sendResponse(res, resMsg[2]));


// Exporting Modules
module.exports = register;