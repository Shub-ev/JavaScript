// NodeJS has two types of module system
// 1. CommonJS module sys
// 2. Ecma Script module sys

// CommonJS each file is module by default
// we cannot write whole code in single file or it will be so complex
// Encapsulate code =>  share only required part (not unnecessary implementation)

// a functionality in a module

// import another module using require();

// variables are private to the module (until we export them)

const { names, allNames } = require('./04_exports');
const callFunction = require('./05_mind_grenade');       // this executes a function inside 05_mind_grenade.js directly

console.log(names);
console.log(allNames);

allNames(names);