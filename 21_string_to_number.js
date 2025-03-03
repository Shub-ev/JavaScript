let string = "1234";

// 1. parseInt
// syntax => parseInt(string, radix)

console.log(parseInt(string));
console.log(typeof parseInt(string));
// but this dosent work with decimal string numbers
string = "1234.1234adsfasdf"
console.log(parseInt(string));  // output => 1234
console.log(typeof parseInt(string));


// 2. parseFloat
// syntax => parseFloat(string)

console.log(parseFloat(string));
console.log(typeof parseFloat(string));
string = 1234.0;
console.log(parseFloat(string));
console.log(typeof parseFloat(string));

string = "1111" // binary string
console.log(parseInt(string, 2));

// 3. add + prior to string number
console.log(typeof (+"1234")); 