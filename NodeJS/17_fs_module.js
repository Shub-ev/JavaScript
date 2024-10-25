const fs = require('fs'); // import fs module


// **********  readFileSync  **********
console.log("First");
const fileData = fs.readFileSync('./text.txt', 'utf-8');    // this is sync method so it will complete reading whole file
// then it moves to the next statement
console.log("Synchronous File Read: " + fileData);


// **********  readFile  **********
console.log("Second");
// here passed call back function have (error, data) => // this pattern is called **** error first call back pattern **** 
const fileData2 = fs.readFile('./text.txt', 'utf-8', (error, data) => {
    if(error){
        console.log("Error ");
        return;
    }
    else{
        console.log("Asynchronous File Read: " + data);
    }
}) // node keeps track of this call back and execute further code 
// once file read is complete call back is executed
console.log("Third");
for(let i = 0; i < 10; i++){
    console.log(i + "\b");
}


// **********  writeFileSync  **********
fs.writeFileSync('another.txt', 'Hello I am Shubham!', { encoding: 'utf-8', flag: 'a' });


// **********  writeFile  **********
fs.writeFile('another.txt', "This is nodeJS", { flag: 'a' }, (error) => {
    if(error){
        console.log("Error white writing file");
    }
    else{
        console.log("File Write Successful");
    }
})

console.log("Last Statement");
