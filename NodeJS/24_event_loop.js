// event loop is another method of **** libuv (written in C) **** to handle async operations without using the thread pool

// libuv is C lib. which provides event driven architecture in Node.js


// microStack queues
// 1. nextTick queue
// 2. promist queue


// 1. nextTick queue
process.nextTick(() => {
    console.log("this is process.nextTick 1")
})