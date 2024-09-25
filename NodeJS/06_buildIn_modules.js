// there are no of build in modules available in node
// ex. os, path, fs


// OS import
// import os build in module using require
const os = require("os");   // deal with system 
const path = require("path");   // deal with system paths
// const fs = require("fs");       // deal with file system
// in fs two approaches are available
// 1. asynchronous => without blocking
const { readFile, writeFile } = require("fs");
// 2. synchronous => blocking
const { readFileSync, writeFileSync } = require("fs");

// prints hostname of system
console.log(os.hostname());
// prints current user info
console.log(os.userInfo());
// prints system uptime
console.log(os.uptime());
// OS info
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS);

// PATH import
console.log("Seperator: " + path.sep);
const currDir = path.dirname(__filename); //gets current path
const pth = path.join(currDir, "someExtraDir", "finalDir");
console.log(pth)
console.log(path.basename(pth));    // prints final file/directory
console.log(path.resolve(__dirname, "src", "logic"));     //creating absolute path for all sys environments


// sync fs methods
const data1 = "This is data for file text1.txt";
const data2 = "This is data for file text2.txt";
//writing file
writeFileSync(path.join(__dirname, "text1.txt"), data1); // here we are overriding the previous content & if file is not present it creates file
writeFileSync(path.join(__dirname, "text2.txt"), data2, {flag: 'a'}); // here we append the data using {flag:'a'} object
//reading file
const read1 = readFileSync(path.join(__dirname, "text1.txt"), 'utf-8');
const read2 = readFileSync(path.join(__dirname, "text2.txt"), 'utf-8');
console.log(read1);
console.log(read2);

// async fs methods
readFile(path.join(__dirname, "text1.txt"), 'utf-8', (err, res) => {        // if we dont provide utf-8 it will return buffer
    if(err){
        console.error(err);
        return err;
    }
    const first = res;

    readFile(path.join(__dirname, "text2.txt"), 'utf-8', (err, res) => {
        if(err){
            console.log(err);
        }
        const second = res;

        writeFile(path.join(__dirname, "txt1.txt"), first, (err, res) => {
            if(err){
                console.log(err);
            }
            return res;
        })

        writeFile(path.join(__dirname, "txt2.txt"), first, (err, res) => {
            if(err){
                console.log(err);
            }
            return res;
        })
    })
})