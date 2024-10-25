// event loop is broad concept and learn

console.log("Start of module");

// even we have 0 sec to call callback func it will not execute but next task will fist execute due to event loop behaviour
// where callback are executed after closest next task
setTimeout(() => {
    console.log("In middle of file");
}, 0);

console.log("End of module");   //