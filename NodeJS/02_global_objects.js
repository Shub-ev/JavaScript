// No Window object available in node
// instead other globals are available 

// these global objects are available in each modules
// followind objs are not global and available only in CommonJS modules

// 1. __dirname
console.log(__dirname);

// 2. __filename
console.log(__filename);

// 3. exports
console.log(exports);

// 4. module
console.log(module);

// 5. require() method
// require();