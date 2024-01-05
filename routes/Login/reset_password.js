// Importing Modules/Packages
const { sendResponse, resMsg, handleAndLogError } = require('../helpers/helper');
const { prepareEmail } = require('../helpers/Email');
const resetPass = require('express').Router();
const { hash } = require('bcrypt');
const path = require('path');


// Reset Password Routes
resetPass.route('/')
// Serving Up Page
.get((req, res) => {
    res.sendFile(path.join(__dirname, '../../public/HTML/Login/Reset_Password.html'), (error) => {
        if(error) {
            handleAndLogError('/ResetPassword', error, 0);
            res.status(500).send('Internal Server Error');
        }
    })
})
// Sends a reset password email
.post((req, res) => {
    // Sanitize data
    if(req.body.id == 6) prepareEmail(req.body.Email);
    else {
        // Sanitize data
        prepareEmail(req.body);
        localStorage.setItem('VerificationCode', hash(req.body.RandomNum));
        sendResponse(res, `${resMsg[3]} ${req.body} please verify...`);
    }
});


// Email Conformation
resetPass.get('/Email_Conformation', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/HTML/Login/Email_Recieved_Conformation.html'), (error) => {
        if(error) {
            handleAndLogError('/Email_Conformation', error, 0);
            res.status(500).send('Internal Server Error');
        }
    })
})


// Reset Password Authentication
resetPass.get('/Reset_Password_Auth', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/HTML/Login/Authentication.html'), (error) => {
        if(error) {
            handleAndLogError('/Reset_Password_Auth', error, 0);
            res.status(500).send('Internal Server Error');
        }
    })
})


// New Password Password Conformation
resetPass.post('/Reset_Password_Auth/UpdatePassword/Conformation', (req, res) => {
    console.log('GOOD PASSED!');
    console.log('/ResetPassword/Reset_Password_Auth/UpdatePassword/Conformation');
})


// Exporting Module
module.exports = resetPass;