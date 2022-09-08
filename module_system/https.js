const request = require('./request');
const response = require('./response');

const { send } = request;
const { read } = response;

function makeRequest(url, data) {
    send(url, data);
    return read(); 
}

const responseData = makeRequest('https://google.com', 'hello');
console.log(responseData);