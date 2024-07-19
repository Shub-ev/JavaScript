// var a = 20;
// var a = 10; //you can redeclare var identifiers which is not in case of let
// function fn(){
//     console.log(a); //global a is accessed if there is no local a

//     console.log(b);   //prints undefined beacuse it can access b due to Hoisting but now its value

//     var b = 40;
// }
// fn();

// console.log(a);

// //console.log(b); you can not access b as it is limited to that scope only 



// var a = 20;
// function fn(){
//     console.log(a); //in this scope, there will be new a in the next line so due to **hoisting**(done during parsing) 
//                     //var a will be available to its previous line
//     var a = 30;

//     console.log(a); //local var a
//     console.log(b);

//     var b = 40;
// }
// fn();

// console.log(a);



var a = null
console.log(typeof a);