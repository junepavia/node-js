function encrypt(data) {
    return 'encrypted';
}

function send(url, data) {
    const encryptedData = encrypt(data);
    console.log(`Sending ${encryptedData} to ${url}`);
}

console.log(module);
module.exports = { send };