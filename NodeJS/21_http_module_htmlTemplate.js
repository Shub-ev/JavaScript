const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type' : 'text/html' });
    
    const name = "Shubham"; // we want this name to be replaced in out html file

    let html = fs.readFileSync('./try.html', 'utf-8');

    html = html.replace('{{name}}', name);

    res.end(html);
})

server.listen(3000, () => {
    console.log(`Server Running at PORT ${3000}`);
})