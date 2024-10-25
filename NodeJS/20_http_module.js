const http = require('http');
const fs = require('fs');   // import for file handling

// http also extends EventEmitter

const server = http.createServer((req, res) => {    // here (req, res) => is event listener call back function 
    // res.writeHead(200, { "Content-Type" : "text/plain" });   // this sends string response to client
    // res.writeHead(200, { 'Content-Type': 'application/json' }) // returns json response to client


    // JSON data
    const data = {
        name: "Shubham",
        age: 20,
    }
    // res.end(data); we cannot directly send js object to client 
    // so convert to JSON using JSON.toString()
    const jsonData = JSON.stringify(data);
    // res.end(jsonData);

    res.writeHead(200, { 'content-type': 'text/html' });    // text/html for sending html responses to client

    // read content of html file
    // const html = fs.readFileSync('./try.html', 'utf-8');  // reads entire file at same time and puts in buffer
    // lot of mem usage 
    // res.end(html)

    fs.createReadStream('./try.html').pipe(res);
})

server.listen(3000, () => {
    console.log("Server running at PORT 3000");
})