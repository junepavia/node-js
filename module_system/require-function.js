//assign required http
const { get } = require('http');

const req = get('http://www.google.com', res => {
    res.on('data', chunk => {
        console.log(`Data chunk is ${chunk}`);
    });
    res.on('end', () => {
        console.log('No more data')
    });
}) 
