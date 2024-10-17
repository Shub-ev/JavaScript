// js is synchronous, blocking, single threaded language
// so it has to be dependant on external dependencies for async operations

// *****  libuv  ***** is one of those dependencies (written in C)

// example 
const fs = require('fs');
console.log(`First`);
fs.readFile('another.txt', 'utf-8', (error, data) => {
    if(error){
        console.log(`Error `+error);
    }
    else{
        console.log(data);
    }
})
console.log(`Last`);
// above code block in async and fs dosent block other statements

const https = require("https");

const start = Date.now();

const MAX_CALL = 8;

// here https is of async IO type hence it is handled by Native async mechanism (diff for diff platforms)
// if OS/KERNEL dont have native async mechanism then thread pool is used by libuv
for(let i = 0; i < MAX_CALL; i++){
    https
        .request("https://www.google.com", (res) => {
            res.on("data", () => {});
            res.on("end", () => {
                console.log(`Request: ${i+1}`, Date.now() - start);
            })
        })
        .end();
}