const store = require('express').Router();
const { getTablesFrom, storeDB } = require('../utils/database');
let path = require('path');
let ejs = require('ejs');
const { sendResponse } = require('./helopers');
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
store.get(`/Product/`, async (req, res) => {
    res.sendFile(`${path}\\Product.html`, (error) => {
        console.log(error);
    })
})


// Getting All Products from Database 
store.get('/Products', async (req, res) => {
    try {
        res.send(await getTablesFrom(process.env.TABLE_NAME4, storeDB));
    }
    catch (error) {
        console.log(error);
    }
})

store.get('/Page2/Products', async (req, res) => {
    try {
        res.send(await getTablesFrom(process.env.TABLE_NAME4, storeDB));
    }
    catch (error) {
        console.log(error);
    }
})

store.get('/Page3/Products', async (req, res) => {
    try {
        res.send(await getTablesFrom(process.env.TABLE_NAME4, storeDB));
    }
    catch (error) {
        console.log(error);
    }
})






module.exports = store;