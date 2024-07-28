// An object is a collection of related data and/or functionality. 
//These usually consist of several variables and functions (which are called properties and methods when they are inside objects). 
//Let's work through an example to understand what they look like.

const person = {  // object is another datatype of javascript
    name: ["Bob", "Smith"],
    adharName: {
        first: "Bob",
        last: "Smith",
    },
    age: 32,
    bio: function bio() {  // methods of the object
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf() { // we can have methods without their respective properties
        console.log(`Hi! I'm ${this.name[0]}.`);
    },

    // () => {}   we cannot have arrow functions without property names obviously
    "" : "colons",
    "!" : "exclamation",
};

console.log(typeof person); // object

// ******   01   *******accessing members
console.log(person.bio()); // dot notation in order to access the members of the object
console.log(person.name[1]); // accessing the array member of object
console.log(person.adharName.first); // chaining dot operator to access the object insite the object
console.log(person["adharName"]["first"]); // brackets can also be used to access members 
// but also used for special member names (e.g. "!", "", ")
// console.log(person.!); this does not word
console.log(person["!"]);



// ******   02   *******accessing members