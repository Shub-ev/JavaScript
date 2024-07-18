//functions are reusable set of instructions

// 2 types of functions: 1. named functions 2. arrow functions (ES6)

// 1. Named functions
function name(parameters, a = 10) { //this is declaration and definition of named function
    //here a = 10 is optional parameter if you miss to pass para. it will use default value

    console.log("inside the function"); //this and blow is the body of the function
    return parameters;    //return value of named function
}
name(10);

// 2. Arrow function
// textBox.addEventListener("keydown", event => {   // if function accepts only one para. then no need of ()
//     console.log(`You pressed "${event.key}".`);  // if function have only one line and its return statement then no need of {}
// });


//build in function 
const myText = "I am a string";
const newString = myText.replace("string", "sausage");
console.log(newString);


//anonymous function
//functions without function name are called as anonymous functions (also known as function expression)
console.log((function () { //this type of functions are not hoisted
    console.log("Message from anonymous");
}));

// document.addEventListener("DOMContentLoad", function(event){ //here we have passed an anonymous function
//     console.log("Hello");
// })

(function() { //immediately invoked function expression IIFE
    console.log("Hello"); 
})();