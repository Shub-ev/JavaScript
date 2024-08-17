// JS executes on single thread by default

// synchronous program is one executing one after another 
// execution of next depends on the results of previous, or not
// but this approach could freeze the functionality in case of heavy computing 

// to avoid this we use asynchronous executing in which processes are done on the another thread
// create and call such functions which will not block execution flow of main thread and will execute on another thread
// and return the results of the execution paralally


// **** there are several methods to achieve asynchronous execution ****


// ***** 01 ***** call back functions 

// in this method we use 
// 1. call back 
// 2. promises
// which returns a value once called and before the execution completion so other tasks will execute real fine

// Before the widespread adoption of the modern fetch API and async/await syntax in JavaScript, 
// the XMLHttpRequest (XHR) object was the primary means of making asynchronous HTTP requests.

// An event handler is a particular type of callback. A callback is just a function that's passed into another function, 
// with the expectation that the callback will be called at the appropriate time.
// call back inside a call back makes pyramid and gets complicated hence it is also called as 


// 1. pyramid of Doom           or             // 2 . call back hell
// i have not implemented asynchronous using calls backs




// ***** 02 ***** Promises

// promises are the foundation of asynchronous programming in modern javascript.
// promise is the object returned by an async. function which represents the current state of the function (ex . pending etc.)
// With a promise-based API, the asynchronous function starts the operation and returns a Promise object. 
// You can then attach handlers to this promise object, and these handlers will be executed when the operation has succeeded or failed.

// const fetchPromise = fetch(
//     "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
// );
// console.log(fetchPromise);

// fetchPromise.then((response) => {   // passing a handler function into the Promise's then() method.
//   console.log(`Received response: ${response.status}`);
// });

// console.log("Started request…");

// // Chaining promises => when you deal with another promise when you are currenly in a promise then it is chaining promises

// const fetchPromise2 = fetch(
//     "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
// )
// fetchPromise2.then(response => {
//     const jsonPromise = response.json();
//     jsonPromise.then(response => { // this is chaining promises
//         console.log(response[0]);
//     })
// })
// // above code can also be written as

// const fetchPromise3 = fetch(
//     "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
// )
// .then(response => {
//     if(!response.ok){
//         throw new Error("Error");
//     }

//     return response.json();
// })
// .then(response => {
//     console.log(response[0]);
// })

// To support error handling, Promise objects provide a catch() method.
// the handler passed to then() is called when the asynchronous operation succeeds, 
// the handler passed to catch() is called when the asynchronous operation fails.

// ** Promise Terminology **
// state of a primise
// A. Pending => the promise has been created, and the asynchronous function it's associated with has not succeeded or failed yet.
// B. fulfilled => the asynchronous function has succeeded. When a promise is fulfilled, its then() handler is called.
// C. rejected => the asynchronous function has failed. When a promise is rejected, its catch() handler is called.


// ***** 02 ***** async and await
// you can only use await inside an async function, unless your code is in a JavaScript module. 
async function fetchProducts(){
    try{
        const response = await fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",);
        // here in fetch instead of promise object we get we get fully complete response object as await makes fetch method wait 
        // until complete response


        if(!response.ok){
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();

        // console.log(response);
        return data;
        
    }
    catch(e){
        console.error(e);
    }
}

fetchData = fetchProducts(); // async function always returns a promise so dont use it as data 
console.log(fetchData); // Promise { <pending> }