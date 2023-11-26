const { getTablesFrom, companyDB, PORT } = require('./utils/database');
const resetPass = require('./routes/reset_password');
const { OpenAI } = require('langchain/llms/openai');
const store = require('./routes/palmerstore');
const { PromptTemplate } = require('langchain/prompts');
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

const promptMessage  = `
    AS a Modeling Specailist at Palmer Studios named Andrey you will answer any questions the user has about Modeling, Beauty, or anything related to that. Also, if the user has any questions about Palmer Studios or your role in Palmer Studios answer. Pretend as this is a real company and make up valid tour date informaton, Palmer events, and so on.

    if the users prompt has nothing to do with the topics i gave you tell that you can only answer questions related to the topics I gave you, but dont repeat my exact words.

    usersQuestion: {question}
`;

// Instantiating a new AI Large Learning Model / Transformer Model
const model = new OpenAI({
    openAIApiKey: process.env.OPENAI_API_KEY,
    maxTokens: 200,
    temperature: 0,
    modelName: 'gpt-3.5-turbo'
});


// Creating a prompt for the Transformer Model to abide by and passing in user data
const prompt = new PromptTemplate({
    template: promptMessage,
    inputVariables: ['question']
});


app.post('/CompanyAI', async (req, res) => {
    try {
        const modelResponse = await prompt.format({ question: req.body.Prompt });
        const response = await model.call(modelResponse);
        res.send(JSON.stringify(response));
    }
    catch(error) {
        console.log(error);
    }
})


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