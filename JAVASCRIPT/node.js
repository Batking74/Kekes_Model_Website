// Importing the http library into my code
const http = require('http');

// Importing the defualt port javascript listens to
const port = 3000;

const fs = require('fs');

//  Creating my server and handling the request-response cycle for each user request
const server = http.createServer((request, response ) => {
    response.writeHead(200, { 'Content-Type': 'text/html' })
    fs.readFile('Contact_Submission.html', (error, data) => {
        if(error) {
            response.writeHead(404)
            response.write('Erro: File not found')
        }
        else {
            response.write(data);
        }
        response.end();
    });
})
// Telling my server to listen on the port I set it to and setting error message if any errors occur.
server.listen(port, (error) => {
    if(error) {
        console.log('Something went wrong', error)
    }
    else {
        console.log('Server is listening on port' + port);
    }
})