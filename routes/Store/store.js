// Importing Packages/Modules
const { getTablesFrom, updateDatabase, companyDB } = require('../../database/database');
const { handleAndLogError, tableName } = require('../helpers/helper');
const store = require('express').Router();
let path = require('path');


// Serving up store pages
store.get('/', async (req, res) => serveStorePage(res, 'Store_1.html'));
store.get('/Page2', async (req, res) => serveStorePage(res, 'Store_2.html', '/Page2'));
store.get('/Page3', async (req, res) => serveStorePage(res, 'Store_3.html', '/Page3'));


// Serving up Products for each store page
store.get('/Products', async (req, res) => getProductsForPage(res));
store.get('/Page2/Products', async (req, res) => getProductsForPage(res, '/Page2'));
store.get('/Page3/Products', async (req, res) => getProductsForPage(res, '/Page3'));


// Serving up HTML Product Page Routes
store.get(`/Product`, async (req, res) => serveProductPage(res, '/Product'));
store.get(`/Page2/Product`, async (req, res) => serveProductPage(res, '/Page2/Product'));
store.get(`/Page3/Product`, async (req, res) => serveProductPage(res, '/Page3/Product'));


// Updates Product Discount Price Table based on frontend conditions
store.put('/Product/Discounts?', async (req, res) => {
    try {
        // Sanitize data
        res.send(await updateDatabase(companyDB, req.body));
    }
    catch (error) {
        handleAndLogError('/Product/Discounts?', error, 0);
    }
})


// Serving up Products Page
function serveProductPage(res, route) {
    res.sendFile(path.join(__dirname, '../../public/HTML/Store/Product.html'), (error) => {
        if(error) handleAndLogError(route, error, 0);
    })
}


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
        res.send(await getTablesFrom(tableName[0], companyDB));
    }
    catch (error) {
        handleAndLogError(`${page}/Products`, error, 0);
    }
}


// Exporting Modules
module.exports = store;