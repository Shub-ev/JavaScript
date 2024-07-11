//for of loop 
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
for (const cat of cats) {  //get the first variable from cats and assign to cat
  console.log(cat);
}

//map function
function upper(cat){
    return cat.toUpperCase();
}
let arr = cats.map(upper);   // take each object from cats and use/pass it to function passed as paramter
//and add the result into the new array and assign the array to arr
console.log(arr);