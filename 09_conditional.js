//conditional statements/execution
if (4 > 5) {
    /* code to run if condition is true */
    console.log(4);
} else {
    /* run some other code instead */
    console.log(5);
}

//single line if else
if (4 > 5) console.log(4);
else console.log(5);


//if for NaN undefined 0 false "" null
if (NaN) console.log("Printed");
if (undefined) console.log("Printed");
if (0) console.log("Printed");
if (false) console.log("Printed");
if (null) console.log("Printed");
if ("") console.log("Printed");
// all the above prints nothing because result of ********NaN undefined 0 "" false null****** is ultimately false

//other if conditions
if (1) console.log("Printed true");
if ("tr") console.log("Printed true");


//logical operators *********** && || ! *********** we know about it


//switch statements are also condition statement used for large number of *************choices**********
let a = 20;
switch (true){ // pass the expression here 
    case (a > 20):           //if expressing matches the case then case and all subsequent cases are executed (hence use break)
        // run this code
        console.log("Case 1 true")
        break;

    case (a > 6):
        // run this code instead
        console.log("Case 2 true")
        break;

    default:
        // actually, just run this code
        console.log("No case is true")
        break;
}



//ternary operator check a condition true or false and return respective (statement/block)
let res = 10 > 5 ? "10 is greater" : "10 is smaller";
console.log(res);