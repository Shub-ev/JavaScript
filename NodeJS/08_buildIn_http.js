// http is used to create server code

const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write("This is Home Page");
        res.end();
    }
    else if(req.url === '/about'){
        res.write("This is About Page");
        res.end();
    }
    else{
        res.end(`
            <div style='background-color: black; color:white;                                                                                                                 '>
                <h1>404</h1>
                <h2>Page Not Found!</h2>
                <br/>
                <h3>Please enter valid url or check your Internet Connection</h3>
            </div>
        `);
    }
})

server.listen(4000, () => {
    console.log("Server Running at 4000");
})