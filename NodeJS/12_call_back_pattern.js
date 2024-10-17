function greet(name){
    console.log("Hello " + name);
}

// any function that is passed as an argument to another function is ***** call back ***** function
// function which accepts or returns a function is called ***** higher order ***** function
function higherOrderFn(callBackFn){
    const name = 'Shubham';
    callBackFn(name);
}
higherOrderFn(greet);


// types of call back functions
// 1. syschronous call back
// 2. asynchronous call back


// 1. synchronous call back 
// if a callback gets executed immediately then it is sync. ex. greet function used here, filter, map

// 1. asynchronous call back    (most of node code is async in nature to precent locking of execution)
// ( async code dosent block the execution of other code )
// async call back function is called after some time when all other func are executed async operations
// ex. event handlers in browser js