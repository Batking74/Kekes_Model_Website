const bcrypt = require('bcrypt');

const resMsg = [
    'Email will be sent to you shortly.',
    'Account Created Thank You!.',
    'GOT UR DATA!2',
    'An email has been sent to',
    'okaaay nazzz',
    'Email Sent!:',
    'Thank You, you will recieve emails on new content!'
];


const DBColumns = [
    '(FirstName, LastName, Gender, Email, Username, Password, State, Account_Created)',
    '(Message, Date_Sent)'
]


// Encrypts Data
async function encryptData(data) {
    try {
        return await bcrypt.hash(data, 10);
    }
    catch(error) {
        return error;
    }
}


// Sends JSON responses
function sendResponse(res, msg) {
    res.send(JSON.stringify(msg));
}


module.exports = { sendResponse, encryptData, DBColumns, resMsg }