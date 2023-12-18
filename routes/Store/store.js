// Importing Packages/Modules
const { getTablesFrom, updateDatabase, storeDB } = require('../../database/database');
const { handleAndLogError, tableName } = require('../helpers/helper');
const store = require('express').Router();
let path = require('path');


// Serving up Page 1
store.get('/', async (req, res) => serveStorePage(res, 'Store_1.html'));


// Serving up Page 2
store.get('/Page2', async (req, res) => serveStorePage(res, 'Store_2.html', '/Page2'));


// Serving up Page 3
store.get('/Page3', async (req, res) => serveStorePage(res, 'Store_3.html', '/Page3'));


// Getting All page 1 Products from Database
store.get('/Products', async (req, res) => getProductsForPage(res));


// Getting All page 2 Products from Database
store.get('/Page2/Products', async (req, res) => getProductsForPage(res, '/Page2'));


// Getting All page 3 Products from Database
store.get('/Page3/Products', async (req, res) => getProductsForPage(res, '/Page3'));


// Products Page
store.get(`/Product`, async (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/HTML/Store/Product.html'), (error) => {
        if(error) handleAndLogError('/Product', error, 0);
    })
})


// Updates Product Discount Price Table based on frontend conditions
store.put('/Product/Discounts?', async (req, res) => {
    try {
        // Sanitize data
        res.send(await updateDatabase(storeDB, req.body));
    }
    catch (error) {
        handleAndLogError('/Product/Discounts?', error, 0);
    }
})


// Serves a store page by sending the specified file to the client.
function serveStorePage(res, file, route = '/') {
    res.sendFile(path.join(__dirname, '../../public/HTML/Store/', file), (error) => {
        if(error) {
            handleAndLogError(route, error, 0);
            res.status(500).send('Internal Server Error');
        }
    })
}


// Handles the retrieval of products based on the specified page.
async function getProductsForPage(res, page = '') {
    try {
        res.send(await getTablesFrom(tableName[0], storeDB));
    }
    catch (error) {
        handleAndLogError(`${page}/Products`, error, 0);
    }
}


// Exporting Modules
module.exports = store;