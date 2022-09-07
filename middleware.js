const express = require('express');
const morgan = require('morgan');
var timeout = require('connect-timeout')

const app = express();

app.use(morgan('dev'));
app.use(timeout('5s'));


app.use((req, resp, next) => {
    console.log('TIME', Date.now());
    console.log('Method', req.method)
    next();
});


app.get('/', (req, res, next) => {
    res.send('<html>HOMEPAGE</html>');
    next();
})

app.get('/about', (req, res, next) => {
    res.send('<html>This is about</html>');
    next();
})

app.get('*', (req, res) => {
    res.status(404).send(`${req.path} Oopps! This Page Does not exist`);
  });

app.listen(3001);