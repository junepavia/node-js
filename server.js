const express = require('express');
const morgan = require('morgan');
const app = express();

app.listen(3000);

app.use(morgan('dev'));

// app.use((req, res, next) =>{
//     console.log(req.url, '** URL **');
//     console.log(req.path, '** PATH **');
//     console.log(req.statusCode, '** STATUS **');
//     next();
// })

app.get('/', (req, res, next) => {
    res.send('Welcome Home');
    next();
});

app.get('/about', (req, res, next) => {
    res.send('about');
    next();
});

// 404 page
// app.use((req, resp, next)=> {
//     req.statu(404).render('404', {title: '404'});
//     console.log(req.path, 'request');
//     next();
// });


