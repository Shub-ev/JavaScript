// here we will discuss about 
// 1. sync 
// 2. async

// fs system methods

const fs = require("fs");
const path = require("path");

console.log("Sync file system!");
const data = "This is a message data";

fs.writeFileSync(path.join(__dirname, "try.txt"), )