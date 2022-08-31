const EventEmitter = require('events');
const celebrity = new EventEmitter();

// subscribe to celebrity for observer 1
celebrity.on('race', (result) => {
    const congratulate = 'Congratualations, you are the best';
    const consolidate = 'Better luck next time';
    if (result === 'win') {
        console.log(`You ${result}! ${congratulate}`);
    } else {
        console.log(`You ${result}! ${consolidate}`);
    }
});

// subscribe to celebrity for observer 2
celebrity.on('race win', () => {
    console.log('boo~~! I could have done better than that');
});

// subscribe to celebrity for observer 3
celebrity.on('race lost', () => {
    console.log('boo~~! I told you I am better than you');
});

process.on('exit', (code) => {
    console.log('Process exit event with code:', code)
});

celebrity.emit('race', 'win');
celebrity.emit('race', 'lost');
