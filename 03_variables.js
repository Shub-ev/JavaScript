let a = 10; //redeclaration is not allowed using the let
a = 20 //but reassignment is allowed
console.log(a);

var b = 30;
var b = "Shubham"; //but redeclaration is allowed in the var 
console.log(b);

//******************Data Types *********************/


//****************** 1. Primitive Data Types *********************/
//a variable can hold a value that differce in data type

//datatypes in JS
// 1 Number 
var num = 10;
num = 5.8;
console.log(typeof num);

// 2 string 
let str = "MasterJS"
str = 1234 + str;
console.log(str);

// 3 Bool 
var tr = false;
console.log(tr);
tr = -false;
console.log(typeof tr);

// 4 null
var nul = null; //variable is initialized but dont have anything hence null even dont have data type
console.log(typeof null);

// 5 underfined
var und;
console.log(typeof und);

// 6 symbol 
/*
The Symbol type in JavaScript is used to create unique and immutable identifiers for object properties(specially in react for unique components). 
This can be particularly useful when you want to avoid property name collisions in objects,
especially when dealing with code that might include third-party libraries.
*/
let sym = Symbol();
console.log(typeof sym);

let symWDesc = Symbol("description of symbol");
console.log(symWDesc);

// 7 BigInt //int V8 the size is (-2^127 - 1) to (+2^127 - 1)
var num = 1234567890123456789012345123523; //by default Numbers in js are stored as 64 bit floating numbers 
console.log("Very Large number : " + num); //if this number exceeds the limits it will be displayed as the exponential 

var num = 1234567890123456789012345123523n; //makign a number BigInt by connecting n at the end;
var num = BigInt("1234567890123456789012345123523"); //makign a number BigInt by using BigInt constructor;
console.log(num);

//******************Data Types *********************/

//******************Non-Primitive Data Types *********************/

// 1 Object 
//This can be anything. Everything in JavaScript is an object and can be stored in a variable
const obj = {
    val1: "Shubham",
    val2: "Gharage",
}
console.log(typeof obj);

// 2 array
var arr = [1, 2, 3, 7, 5];
for(var i in arr){
    console.log(arr[i]);
}
console.log(typeof arr); // arrays are objects 

//3 functions 