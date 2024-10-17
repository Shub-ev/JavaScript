const buffer = new Buffer.from("Shubham");  // creates a buffer with default utf-8 encoding
// utf-8 is the no of bits required to store the specific character in that encodign format

console.log(buffer.toJSON());    // prints object with Unicode value of each character
console.log(buffer);       // prints the buffer data with hex values

console.log(buffer.toString());  // prints the string representation of buffer data

buffer.write("str");

console.log(buffer.toString());    // here buffer overrides the previous data as it has limited mem.
