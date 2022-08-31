// const promise = new Promise((resolve, reject) => {
//     const resolved = resolve('Successfully resolve');
//     const rejected = reject('Error');

//     true ? resolved : rejected;
// });

// promise.then(result => `${result}!`)
// .then(result2 => `${result2}!`)
// .catch((error) => console.log(`error`))
// .then(result3 => {
//     console.log(`${result3}!`);
// });

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, 'Resolve 1');
// });

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, 'Resolve 2');
// });

// const promise4 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, 'Resolve 3');
// });

// Promise.all([promise, promise2, promise3, promise4])
// .then(values => console.log(values));

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums',
];

Promise.all(urls.map(url => {
    return fetch(url).then(resp => resp.json())
})).then(results => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
})