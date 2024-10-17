const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Get request at : ' + req.url);
    console.log('Request Method: ' + req.method);

    if(req.url === '/'){
        res.writeHead(200, { 'content-type': 'text/html' });
        res.end('<h1>Home Page</h1>');
    }
    else if(req.url === '/about'){
        res.writeHead(200, { 'content-type': 'text/html' });
        res.end('<h1>About Page</h1>');
    }
    else if(req.url === '/server'){
        res.writeHead(200, { 'content-type': 'text/html' });
        res.end('<h1>Server Page</h1>');
    }
    else{
        res.writeHead(400, { 'content-type': 'text/html' });
        res.end('<h1>Error</h1>');
    }
})

server.listen(3000, () => {
    console.log(`Server Running at PORT ${3000}`);
})