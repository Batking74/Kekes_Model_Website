// Importing Modules/Packages
const { handleAndLogError, tableName, apiURL } = require('./helpers/helper');
const { getTablesFrom, companyDB } = require('../database/database');
const resetPass = require('./Login/reset_password');
const contact = require('./Contact/Contact');
const register = require('./Login/Register');
const route = require('express').Router();
const AI = require('./AI/Transformer');
const store = require('./Store/store');
const login = require('./Login/login');
const { compare } = require('bcrypt');
const FAQ = require('./FAQ/FAQ');


// Middleware
route.use('/Store', store);
route.use('/Login', login);
route.use('/Register', register);
route.use('/ResetPassword', resetPass);
route.use('/CompanyAI', AI);
route.use('/FAQ', FAQ);
route.use('/Contact', contact);


// Retreiving Company Data from database
route.get('/Companyinfo', async (req, res) => {
    try {
        const data = await getTablesFrom(tableName[2], companyDB);
        res.json(data[0]);
    }
    catch(error) {
        handleAndLogError('Companyinfo', error, 0);
    }
})


// Gets Users input Verification Code 
route.put('/VerificationCode', async (req, res) => {
    const usersCode = req.body.usersCode;
    if(await compare(usersCode, req.body.HashCode)) res.json(true);
    else res.json('Incorrect Verification Code');
})



// Getting YouTube API Data
route.get('/YouTube', async (req, res) => {
    res.send(`${apiURL[1]}${process.env.YOUTUBE_API_KEY}`);
})


// Getting Weather API Data
route.get('/Weather', async (req, res) => {
    res.send(`${apiURL[0]}&appid${process.env.WEATHER_API_KEY}`);
})


// Exporting Module
module.exports = route;