// Importing Packages
const bcrypt = require('bcrypt');


// Route Response Messages
const resMsg = [
    'Email will be sent to you shortly.',
    'Account Created Thank You!.',
    'GOT UR DATA!2',
    'An email has been sent to',
    'okaaay nazzz',
    'Email Sent!:',
    'Thank You, you will recieve emails on new content!'
];


// API URLs
const apiURL = [
    'https://api.openweathermap.org/data/2.5/weather?lat=39.2908816&lon=-76.610759&units=imperial&limit=1',
    'https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCG7azEZJY5PCsjcUCOdvOPw&q=kekepalmerwebsite&key='
]


// Table Names
const tableName = ['products', 'user_accounts', 'companyinfo'];


// Database Columns
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
        handleAndLogError('encryptData', error);
    }
}


// Sends JSON responses
function sendResponse(res, msg) {
    res.send(JSON.stringify(msg));
}


// Handles Error Messages and Logs them
function handleAndLogError(functionName, error, i) {
    let type = 'function';
    if(i == 0) type = 'routing';
    console.error(`Error Occurred in: ${functionName} ${type}: ${error.message}`);
    throw error;
}


// Exporting Modules
module.exports = { sendResponse, encryptData, DBColumns, resMsg, handleAndLogError, tableName, apiURL }