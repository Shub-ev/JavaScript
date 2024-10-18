// IIFE => Immediately Invoked function expression

// IIFEs are used to avoid global variable pollution in normal functions

(function () {              // unamed IIFE
    console.log("Inside IIFE 1");
})();

(function fnName() {        // named IIFE
    console.log("IIFE with name!");
})();

(() => {
    console.log("IIFE with arrow function");
})();

((name) => {                // para IIFE
    console.log("IIFE with arrow function "+ name);
})("Shubham");

function ar(){};

console.log(typeof ar);