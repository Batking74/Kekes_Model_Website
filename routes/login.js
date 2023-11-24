const { getTablesFrom, userDB } = require('../utils/database');
const { sendResponse } = require('./helopers');
const login = require('express').Router();
let path = require('path');
path = `${path.dirname(path.join(__dirname))}\\public\\HTML\\Login\\Login.html`;


// Login Page Route
login.get('/', (req, res) => {
    res.sendFile(path, (error) => {
        console.log(error);
    })
})


// Retrieves all users from SQL Database
login.get('/Users', async (req, res) => {
    try {
        const data = await getTablesFrom(process.env.TABLE_NAME2, userDB);
        sendResponse(res, data);
    }
    catch (error) {
        console.log(error);
    }
});


module.exports = login;