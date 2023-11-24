const resetPass = require('express').Router();
const { sendMailToUser } = require('./Email');
const { sendResponse, resMsg } = require('./helopers');
let path = require('path');
path = `${path.dirname(path.join(__dirname))}\\public\\HTML\\Login\\Reset_Password.html`;

// Reset Password Route
resetPass.route('/ResetPassword')
.get((req, res) => {
    res.sendFile(path, (error) => {
        console.log(error);
    })
})
.post((req, res) => {
    if(req.body.id == 6) sendMailToUser(req.body.Email);
    else {
        sendMailToUser(req.body);
        sendResponse(res, `${resMsg[3]} ${req.body} please verify...`);
    }
});


// Reset Password Authentication
resetPass.get('/ResetPassword/Reset_Password_Auth', (req, res) => {
    console.log('test');
})


// New Password Password Conformation
resetPass.post('/ResetPassword/Reset_Password_Auth/UpdatePassword/Conformation', (req, res) => {
    console.log('test');
})




module.exports = resetPass;