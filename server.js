const { getTablesFrom, companyDB, PORT } = require('./utils/database');
const resetPass = require('./routes/reset_password');
const store = require('./routes/palmerstore');
const register = require('./routes/Register');
const express = require('express');
const login = require('./routes/login');
const { sendMailToCompany, mail } = require('./routes/Email');
const path = require('path');
require('dotenv').config();
const app = express();

// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use('/Store', store);
app.use('/Email', mail);
app.use('/Login', login);
app.use('/Register', register);
app.use('/ResetPassword', resetPass);


app.get('/Apis', async (req, res) => {
    res.send(await getTablesFrom(process.env.TABLE_NAME5, companyDB));
})



// Retreiving Company Data from database
app.get('/Companyinfo', async (req, res) => {
    try {
        const data = await getTablesFrom(process.env.TABLE_NAME1, companyDB);
        res.json(data[0]);
    }
    catch(error) {
        console.log(error);
    }
})


// User Contacting Company
app.route('/Contact')
.get((req, res) => {
    res.sendFile(path.join(__dirname, 'public/HTML/Contact.html'), (error) => {
        console.log(error);
    });
})
.post(async (req, res) => {
    try {
        sendMailToCompany(req.body);
        const encryptedData = await encryptData(req.body.Email);
        sendResponse(res, encryptedData);
    }
    catch (error) {
        console.log(error);
    }
})


// FAQ Route
app.post('/FAQ', async (req, res) => {
    try {
        sendMailToCompany(req.body);
        const encryptedData = await encryptData(req.body.Email);
        sendResponse(res, encryptedData);
    }
    catch (error) {
        console.log(error);
    }
})


// Starting Palmer Studios Server
app.listen(PORT, (err) => {
    if(err) throw err;
    console.log(`Listening on port ${PORT} SUCCESS!!!`);
});


// Exporting Modules
module.exports = app;