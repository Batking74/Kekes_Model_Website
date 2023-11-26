const store = require('express').Router();
const { getTablesFrom, updateDatabase, storeDB, userDB } = require('../utils/database');
let path = require('path');
let ejs = require('ejs');
const { sendResponse } = require('./helopers');
const { query } = require('express');
path = `${path.dirname(path.join(__dirname))}\\public\\HTML\\Store`;


// Page 1
store.get('/', async (req, res) => {
    res.sendFile(`${path}\\Store_1.html`, (error) => {
        console.log(error);
    })
})


// Page 2
store.get('/Page2', async (req, res) => {
    res.sendFile(`${path}\\Store_2.html`, (error) => {
        console.log(error);
    })
})


// Page 3
store.get('/Page3', async (req, res) => {
    res.sendFile(`${path}\\Store_3.html`, (error) => {
        console.log(error);
    })
})


// Products Page
store.get(`/Product`, async (req, res) => {
    res.sendFile(`${path}\\Product.html`, (error) => {
        console.log(error);
    })
})


// Getting All page 1 Products from Database
store.get('/Products', async (req, res) => {
    try {
        res.send(await getTablesFrom(process.env.TABLE_NAME4, storeDB));
    }
    catch (error) {
        console.log(error);
    }
})


// Getting All page 2 Products from Database
store.get('/Page2/Products', async (req, res) => {
    try {
        res.send(await getTablesFrom(process.env.TABLE_NAME4, storeDB));
    }
    catch (error) {
        console.log(error);
    }
})


// Getting All page 3 Products from Database
store.get('/Page3/Products', async (req, res) => {
    try {
        res.send(await getTablesFrom(process.env.TABLE_NAME4, storeDB));
    }
    catch (error) {
        console.log(error);
    }
})


// Updates Product Discount Price Table based on frontend conditions
store.put('/Product/Discounts?', async (req, res) => {
    try {
        res.send(await updateDatabase(storeDB, req.body));
    }
    catch (error) {
        console.log(error);
    }
})


// Exporting Modules
module.exports = store;