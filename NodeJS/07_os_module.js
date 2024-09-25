// os build in module in node

const os = require("os");

console.log("This is" + os.EOL + "end of line");        // os.EOL adds system dependant end of line
console.log("No of cors (for parallelism): " + os.availableParallelism());
console.log("cpu architecture: " + os.arch());
// console.log(os.constants);  // OS specific constants (returns obj)
console.log(os.cpus()) // returns array of objects containing info about each logical CPU core