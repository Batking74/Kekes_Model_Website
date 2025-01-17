// Importing Modules/Packages
const { sendResponse, handleAndLogError, tableName } = require('../helpers/helper');
const { getTablesFrom, companyDB } = require('../../database/database');
const login = require('express').Router();
const path = require('path');


// Serves up login page
login.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/HTML/Login/Login.html'), (error) => {
        if(error) {
            handleAndLogError('/', error, 0);
            res.status(500).send('Internal Server Error');
        }
    })
})


// Retrieves all users from SQL Database
login.get('/Users', async (req, res) => {
    try {
        const data = await getTablesFrom(tableName[1], companyDB);
        sendResponse(res, data);
    }
    catch (error) {
        handleAndLogError('/Users', error, 0);
    }
});


// Exporting Module
module.exports = login;