const { Worker, isMainThread, parentPort } = require('worker_threads');

if(isMainThread){
    console.log("Running in the main Thread.");
    console.log(__filename);

    const worker = new Worker(__filename);

    worker.addListener("message", (result) => {
        for(i in result){
            console.log("worker " + i);
        }
    })

    worker.postMessage(10);
}
else{
    console.log("Worker thread running.");
}