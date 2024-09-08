// Importing Modules
import { sendPOSTRequestToSever } from "../../helpers/request_methods.js";
import { handleAndLogError } from "../../helpers/helper.js";
import { responseContainer } from "../Nav&Footer.js";


// Sends a prompt to Ai Transfomer Model
export async function promptTransfomer(promptInput) {
    try {
        const [usersPromptElement, AIResponseElement, value] = clearInputAndCreateElements(promptInput);
        // Displays Users Prompt
        usersPromptElement.textContent = `You: ${value}`;

        // Retrieves Ai response
        AIResponseElement.textContent = await sendPOSTRequestToSever('/CompanyAI', { Prompt: value });
        responseContainer.forEach(container => {
            container.append(usersPromptElement);
            container.append(AIResponseElement);
        })

        // Speak the AI Response
        speakResponse(AIResponseElement.textContent);
    }
    catch(error) {
        handleAndLogError('promptTransfomer', error);
    }
}


// Clears the text input and creates new elements to display users prompt and Ai response
export function clearInputAndCreateElements(promptInput) {
    const value = promptInput.value;
    promptInput.value = '';
    const usersPromptElement = document.createElement('p');
    const AIResponseElement = document.createElement('p');
    AIResponseElement.setAttribute('class', 'prompt-output');
    return [usersPromptElement, AIResponseElement, value];
}


// Speaks AI Response
export function speakResponse(AIResponse) {
    const text = new SpeechSynthesisUtterance(AIResponse);
    text.rate = 1.7;
    speechSynthesis.speak(text);
}