// An object is a collection of related data and/or functionality. 
//These usually consist of several variables and functions (which are called properties and methods when they are inside objects). 
//Let's work through an example to understand what they look like.


// object literal
const bobPerson = {  // object is another datatype of javascript
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

console.log(typeof bobPerson); // object

// ******   01   ******* accessing members
console.log(bobPerson.bio()); // dot notation in order to access the members of the object
console.log(bobPerson.name[1]); // accessing the array member of object
console.log(bobPerson.adharName.first); // chaining dot operator to access the object insite the object
console.log(bobPerson["adharName"]["first"]); // brackets can also be used to access members 
// but also used for special member names (e.g. "!", "", ")
// console.log(person.!); this does not word
console.log(bobPerson["!"]);



// ******   02   ******* setting object members
bobPerson.color = "white"; // setting person object with new members 
bobPerson.adharName.middle = "John";
bobPerson.myAdharName = () => console.log(`My Andhar Name is ${bobPerson.adharName.first} ${bobPerson.adharName.middle} ${bobPerson.adharName.last}`);
console.log(bobPerson);
console.log(bobPerson.myAdharName());
const height = 10;
bobPerson.height = height;
// person[height] = height; // this adds '10' : 10 .....so bug
console.log(bobPerson);
console.log(bobPerson.height);


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
let human1 = new Human("Harish"); // creating object using class constructor
console.log(human1);




// ******   04   ******* inheritance
// new class can be creted using Person class to use its properties and methods 
// this is known as ****** inheritance ******
class Person{
    constructor(nm){
        this.name = nm;
    }

    greet = () => console.log(`Hi my name is ${this.name}`);
}

class Teacher extends Person{
    constructor(name, sub){
        super(name);
        this.subject = sub;
    }

    mySubject = () => {
        console.log(`I teach ${this.subject}`);
    }
}

let teacher1 = new Teacher("Sachin", "Maths");
console.log(teacher1.greet()); // property from parent class
console.log(teacher1.mySubject()); // method from current object



// ******   05   ******* overriding base class functions 
// using same teacher class as parent class

class RetiredTeacher extends Teacher{
    constructor(name, sub, ag){
        super(name, sub);

        this.age = ag;
    }

    mySubject = () => {
        console.log(`I tought ${this.subject} years ago..`);
    }
}