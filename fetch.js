const fetch = require('node-fetch');

const URLS = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
];

const URL_USERS = 'https://jsonplaceholder.typicode.com/users';

// fetch(URL_USERS)
// .then(resp => resp.json())
// .then(console.log)

// async function fetchUsers() {
//     const resp = await fetch(URL_USERS);
//     const data = await resp.json();
//     console.log(data)
// };

// fetchUsers();

Promise.all(URLS.map(url => 
    fetch(url).then(resp => resp.json())
)).then(array => {
    console.log('users', array[0]);
    console.log('users', array[1]);
    console.log('users', array[2]);
}).catch('oops!');

