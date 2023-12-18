// Importing Modules/Packages
const { sendResponse, resMsg, handleAndLogError } = require('../helpers/helper');
const { prepareEmail } = require('../helpers/Email');
const resetPass = require('express').Router();
const path = require('path');


// Reset Password Routes
resetPass.route('/ResetPassword')
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
        sendResponse(res, `${resMsg[3]} ${req.body} please verify...`);
    }
});


// Reset Password Authentication
resetPass.get('/ResetPassword/Reset_Password_Auth', (req, res) => {
    console.log('GOOD PASSED!');
    console.log('/ResetPassword/Reset_Password_Auth');
})


// New Password Password Conformation
resetPass.post('/ResetPassword/Reset_Password_Auth/UpdatePassword/Conformation', (req, res) => {
    console.log('GOOD PASSED!');
    console.log('/ResetPassword/Reset_Password_Auth/UpdatePassword/Conformation');
})


// Exporting Module
module.exports = resetPass;