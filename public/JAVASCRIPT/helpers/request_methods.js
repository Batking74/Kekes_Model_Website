// Importing Modules
import { handleAndLogError } from "./helper.js";

// Sends a Get Request to a specific route on the server/backend
export async function sendGETRequestToSever(route) {
    try {
        return (await fetch(route)).json();
    }
    catch(error) {
        handleAndLogError('sendGETRequestToSever', error);
    }
}


// Sends a Post Request to a specific route on the server/backend
export async function sendPOSTRequestToSever(route, data) {
    try {
        return await sendRequest(route, data, 'POST', 'sendPOSTRequestToSever');
    }
    catch(error) {
        handleAndLogError('sendPOSTRequestToSever', error);
    }
}


// Sends a Put Request to a specific route on the server/backend
export async function sendPUTRequestToSever(route, data) {
    try {
        return await sendRequest(route, data, 'PUT', 'sendPUTRequestToSever');
    }
    catch(error) {
        handleAndLogError('sendPUTRequestToSever', error);
    }
}


// Sends a Delete Request to a specific route on the server/backend
export async function sendDELETERequestToSever(route, data) {
    try {
        return await sendRequest(route, data, 'DELETE', 'sendDELETERequestToSever');
    }
    catch(error) {
        handleAndLogError('sendDELETERequestToSever', error);
    }
}


// Sends the request and returns the response
async function sendRequest(route, data, request, functionName) {
    try {
        const res = await fetch(route, options(request, data));
        return await res.json();
    }
    catch(error) {
        handleAndLogError(functionName, error);
    }
}


// Returns fetch options parameters
function options(method, data) {
    return {
        method: method,
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }
}