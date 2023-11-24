const register = require('express').Router();
const { sendMailToUser } = require('./Email');
const { sendResponse, resMsg } = require('./helopers');
let path = require('path');
path = `${path.dirname(path.join(__dirname))}\\public\\HTML\\Login\\Registration.html`;

// Registering User to Receive Emails
register.post('/ReceiveEmails', async (req, res) => {
    try {
        sendMailToUser(req.body);
        sendResponse(res, resMsg[6]);
    }
    catch(error) {
        console.log(error)
        sendResponse(res, error);
    }
})

register.route('/')
.get((req, res) => {
    res.sendFile(path, (error) => {
        console.log(error);
    })
})
.post((req, res) => {
    if(req.body.id === 1 && req.body.Answer == req.body.RandomNum) {
        res.body.RandomNum;
        res.body.Answer;
        console.log(res.body);
        createNewUser(req.body, userDB, process.env.TABLE_NAME2, DBColumns[0]);
    }
    sendMailToUser(req.body);
})

register.post('/Register/Account_Verification/Account_Conformation', (req, res) => sendResponse(res, resMsg[2]));

register.get('/Register/Account_Verification')




module.exports = register;