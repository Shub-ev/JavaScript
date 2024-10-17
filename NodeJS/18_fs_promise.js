const fs = require('node:fs/promises');
// this is promise based fs module

console.log("First");

fs.readFile('./another.txt', 'utf-8')
    .then( response => {
        console.log(response);
    })
    .catch( error => {
        console.log(error);
    })

async function FileRead(){
    try{
        const data = await fs.readFile('./another.txt', 'utf-8');
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
}
FileRead();

console.log("Last");
