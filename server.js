// Importing Modules/Packages
const { handleAndLogError } = require('./routes/helpers/helper');
const { PORT } = require('./database/database');
const routes = require('./routes/index');
const express = require('express');
require('dotenv').config();
const app = express();


// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(routes);


// Starting Palmer Studios Server
app.listen(PORT, (error) => {
    if(error) handleAndLogError('server setup listen', error, 1);
    console.log(`Listening on port ${PORT} SUCCESS!!!`);
});


// Exporting Modules
module.exports = app;