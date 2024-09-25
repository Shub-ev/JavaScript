var a = 20;
var a = 10; //you can redeclare var identifiers which is not in case of let
(function() {
    console.log(a); //global a is accessed if there is no local a

    console.log(b);   //prints undefined beacuse it can access b due to Hoisting but now its value

    var b = 40;
})();       // IIFE => Immediately invoked function execution

console.log(a);

// console.log(b);  (Error!)  // you can not access b as it is limited to that scope only 


var a = 20;
(function(){
    console.log(a); //in this scope, there will be new a in the next line so due to **hoisting**(done during parsing) 
                    //var a will be available to its previous line global is shadowed
    var a = 30;

    console.log(a); //local var a
    console.log(b);

    var b = 40;
}());

console.log(a);



// var a = null         // null is an object
// console.log(typeof a);