setTimeout(() => {
console.log('1 is the loneliest number');
}, 2);

Promise.resolve('hi').then(data => console.log('2', data));

//3
console.log('3');