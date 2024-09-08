// Importing Modules/Packages
const { PromptTemplate } = require('langchain/prompts');
const { OpenAI } = require('langchain/llms/openai');
const { handleAndLogError } = require('../helpers/helper');
const ai = require('express').Router();


// Ai Prompt Message
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


// Route for users prompts
ai.post('/', async (req, res) => {
    const usersPrompt = req.body.Prompt;
    if(usersPrompt != '') {
        try {
            const modelResponse = await prompt.format({ question: usersPrompt });
            const response = await model.call(modelResponse);
            res.send(JSON.stringify(response));
        }
        catch(error) {
            handleAndLogError('/', error, 0);
        }
    }
})


// Exporting Module
module.exports = ai;