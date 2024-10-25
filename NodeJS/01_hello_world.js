// each file in node is a module
const arr = [1,2,2.5,4,5];

console.log("For of Loop");
for(i of arr){
    console.log("Hello " + i);
}

console.log("\nFor in Loop");
for(i in arr){
    console.log("Hello" + i);
}