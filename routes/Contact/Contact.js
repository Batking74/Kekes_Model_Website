// Importing Packages/Modules
const { handleAndLogError, encryptData } = require('../helpers/helper');
const contact = require('express').Router();
const path = require('path');


// Contact Routes
contact.route('/')
// Serves up Contact file
.get((req, res) => {
    res.sendFile(path.join(__dirname, '../../public/HTML/Contact.html'), (error) => {
        if(error) {
            handleAndLogError('/', error, 0);
            res.status(500).send('Internal Server Error');
        }
    });
})
// Sends users message to company
.post(async (req, res) => {
    try {
        // Sanitize Data
        sendMailToCompany(req.body);
        const encryptedData = await encryptData(req.body.Email);
        sendResponse(res, encryptedData);
    }
    catch (error) {
        handleAndLogError('/', error, 0);
    }
})

// Exporting Module
module.exports = contact;