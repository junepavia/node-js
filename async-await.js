const fetch = require('node-fetch');

const URLS = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/post',
    'https://jsonplaceholder.typicode.com/albums'
];

const BASE_URL = 'https://jsonplaceholder.typicode.com'

// async function fetchUsers() {
//     const resp = await fetch(`${BASE_URL$}/users`);
//     const data = await resp.json();
//     console.log(data)
// }

// fetchUsers();

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

getData();