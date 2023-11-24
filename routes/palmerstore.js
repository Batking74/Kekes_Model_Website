const store = require('express').Router();
const path = require('path');




store.get('/store/:id', (req, res) => {
    fs.readFile('./public/HTML/Store/Product.html', 'utf8', (err, HTML) => {
        res.send(HTML);
    })
})


store.get('store/products', async (req, res) => {
    res.send(await getTablesFrom(process.env.TABLE_NAME4, storeDB));
})

store.get('store/page2', async (req, res) => {
    res.send(await getTablesFrom(process.env.TABLE_NAME4, storeDB));
})

store.get('store/page3', async (req, res) => {
    res.send(await getTablesFrom(process.env.TABLE_NAME4, storeDB));
})




module.exports = store;