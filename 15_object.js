// An object is a collection of related data and/or functionality. 
//These usually consist of several variables and functions (which are called properties and methods when they are inside objects). 
//Let's work through an example to understand what they look like.


// object literal
const person = {  // object is another datatype of javascript
    name: ["Bob", "Smith"],
    adharName: {
        first: "Bob",
        last: "Smith",
    },
    age: 32,
    bio: function bio() {  // methods of the object
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`); // this refers to current object or current code 
        //which is being executed
    },
    introduceSelf() { // we can have methods without their respective properties
        console.log(`Hi! I'm ${this.name[0]}.`);
    },

    // () => {}   we cannot have arrow functions without property names obviously
    "" : "colons",
    "!" : "exclamation",
};

console.log(typeof person); // object

// ******   01   ******* accessing members
console.log(person.bio()); // dot notation in order to access the members of the object
console.log(person.name[1]); // accessing the array member of object
console.log(person.adharName.first); // chaining dot operator to access the object insite the object
console.log(person["adharName"]["first"]); // brackets can also be used to access members 
// but also used for special member names (e.g. "!", "", ")
// console.log(person.!); this does not word
console.log(person["!"]);



// ******   02   ******* setting object members
person.color = "white"; // setting person object with new members 
person.adharName.middle = "John";
person.myAdharName = () => console.log(`My Andhar Name is ${person.adharName.first} ${person.adharName.middle} ${person.adharName.last}`);
console.log(person);
console.log(person.myAdharName());
const height = 10;
person.height = height;
// person[height] = height; // this adds '10' : 10 .....so bug
console.log(person);
console.log(person.height);


// ******   03   ******* constructor functions/methods
// these are used to create objects having same members and member functions
// function used to create similar objects is constructor
function Human (name) {  // functions name should be similar as object but with capital letter (not compulsory, for convinience)
    const human = {} // const objects can be modified bcoz person holds ref of {}/object not actual obj

    human.name = name;
    human.intro = () => {
        console.log(`Hello my name is ${human.name}`);
    }

    return human;
}
let human1 = new Human("Harish");
console.log(human1);