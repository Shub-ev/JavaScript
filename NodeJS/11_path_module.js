// used to deal with system paths and file system paths
const path = require('path');

console.log(__filename); // prints current file loc. absolute
console.log(__dirname); // prints dir name / absolute

console.log(path.basename(__filename)); // prints base/final name of file
console.log(path.basename(__dirname));  // prints base/final name of dir

console.log(path.extname(__filename));  // prints the extension of spcified file in loc
console.log(path.extname(__dirname));   // prints nothing as dir dont have extension

console.log(path.parse(__filename)); // prints the info about path specified in obj format

console.log(path.format(path.parse(__filename)));

console.log(path.isAbsolute(__filename));   // prinst true or false on whether passed param is absolute path or not
console.log(path.isAbsolute('./path/to/dir/')); 

console.log(path.join('/first//path', '/another/path', '..final/path'));
