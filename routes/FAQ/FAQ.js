// Importing Packages/Modules
const { encryptData, handleAndLogError, sendResponse } = require('../helpers/helper');
const { prepareEmail } = require('../helpers/Email');
const FAQ = require('express').Router();


// FAQ Route
FAQ.post('/', async (req, res) => {
    try {
        // Sanitize data
        prepareEmail(req.body);
        const encryptedData = await  encryptData(req.body.Email);
        sendResponse(res, encryptedData);
    }
    catch (error) {
        handleAndLogError('/', error, 0);
    }
})


// Exporting Module
module.exports = FAQ;