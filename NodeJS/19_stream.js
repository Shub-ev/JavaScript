// stream is the data we read in the form of chunks instead of continious manner

const fs = require('node:fs');  // fs module extends EventEmitter class // hence have .on


// creating readable stream
const readStream = fs.createReadStream('./another.txt', {
    encoding: 'utf-8',
    highWaterMark: 2,
}); // creating read stream

readStream.on('data', (chunk) => {      // event listener i.e. on receiving data call back is executed
    console.log(chunk)
})


// creating writable stream
const writeStream = fs.createWriteStream('./text.txt');

readStream.on('data', (chunk) => {
    writeStream.write(chunk);
})