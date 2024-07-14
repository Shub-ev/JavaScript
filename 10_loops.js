//***********for of loop*********** 
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
for (const cat of cats) {  //get the first variable from cats and assign to cat
  console.log(cat);
}

//***********map function****************
function upper(cat){
    return cat.toUpperCase();
}
let arr = cats.map(upper);   // take each object from cats and use/pass it to function passed as paramter
//and add the result into the new array and assign the array to arr
console.log(arr);


//***********filter function****************
function lCat(cat) {
  return cat.startsWith("L");
}
const filtered = cats.filter(lCat); //similar of map() but based on the return value of function is true or false
//values are either added in the new array or not
console.log(filtered);
// [ "Leopard", "Lion" ]


//***********standard for loop****************
// for (initializer; condition; final-expression) {
//   // code to run
// }
for (let i = 0; i < cats.length; i++) {
  console.log(cats[i]);
}


//***********while loop*****************
// initializer
// while (condition) {
//   // code to run

//   final-expression
// }

let myFavoriteCats = "My cats are called ";
let i = 0
while (i < cats.length) {
  if (i === cats.length - 1) {
    myFavoriteCats += `and ${cats[i]}.`;
  } else {
    myFavoriteCats += `${cats[i]}, `;
  }
  i++;
}
console.log(myFavoriteCats); // "My cats are called Pete, Biggles, and Jasmine."


//***************do while loop*************
// initializer
// do {
//   // code to run

//   final-expression
// } while (condition)
do {
  if (i === cats.length - 1) {
    myFavoriteCats += `and ${cats[i]}.`;
  } else {
    myFavoriteCats += `${cats[i]}, `;
  }

  i++;
} while (i < cats.length);

console.log(myFavoriteCats);