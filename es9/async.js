const fetch = require('node-fetch');

const URLS = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/post',
    'https://jsonplaceholder.typicode.com/albums'
];

const getData = async function() {
    try {
        const [users, posts, albums] = await Promise.all(URLS.map(url => 
            fetch(url).then(resp => resp.json())
        ));
        console.log('USERS', users);
    } catch (err) {
        console.log(err, 'OOPS!')
    }
       
}

const getSecondData =  async function() {
    const arrayOfPromises = URLS.map(url => fetch(url));
    for await (let request of arrayOfPromises) {
        const data = await request.json();
        console.log(data, 'data');
    }
}

// getData();
getSecondData();