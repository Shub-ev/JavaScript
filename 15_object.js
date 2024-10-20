// An object is a collection of related data and/or functionality. 
// These usually consist of several variables and functions (which are called properties and methods when they are inside objects). 
// Let's work through an example to understand what they look like.


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

console.log("************ Factory Function ************");
// ******   03   ******* constructor functions/methods
// these are used to create objects having same members and member functions
// function used to create similar objects is constructor
function Student(name, age){  // functions name should be similar as object but with capital letter (not compulsory, for convinience)
    console.log(this);  
    this.sName = name;
    this.age = age;

    this.introduce = () => {
        console.log(this);
    }
}
const stud = new Student("Shubham", 20);
console.log(stud);
console.log(stud.introduce());


console.log("************ Constructor Function ************");
// ******   04   ******* Factory functions/methods
// factory function creates object explicitly and return the ref
// no need of new while calling the function
function Human (name) {  
    const human = {} // const objects can be modified bcoz person holds ref of {}/object not actual obj

    human.name = name;
    human.intro = () => {
        console.log(`Hello my name is ${human.name}`);
    }
    return human;
}
let human1 = Human("Harish"); // creating object using class constructor
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

    mySubject = () => {  // overrinding (shadowing)
        console.log(`I tought ${this.subject} years ago..`);
    }
} 


// ******   06   ******* prototypes
// Every object in JavaScript has a built-in property, which is called its prototype. 
// The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. 
// The chain ends when we reach a prototype that has null for its own prototype.

// if we crate an object
let obj = { // event this object have only one property *** it have build in prototype property which holds different methods (toString) ***
    name : "Shubham",
};
console.log(Object.getPrototypeOf(obj)); // Object.getPrototyOf is the method to get the prototype of passed object 
// ****** if a property is not present in the current object it is searched in the protopy object. if not present then serached in prototype of prototy ******
// ******  if a method is present in current object and in prototype also then current is used and method in prototype is "showdowed"  ******


// ******   07   ******* setting an object's prototype in JavaScript

// A. Using Object.create()
// The Object.create() method creates a new object and allows you to specify an object that will be used as the new object's prototype.
// ex.
let proto = {
    name: "prototype",
    messageProto: () => {
        console.log("This is a prototype object");
    }
}

let newObj = Object.create(proto); // creating new object newObj which have proto object as its prototype
console.log(newObj);
console.log(Object.getPrototypeOf(newObj)); // this prints proto object as it is the prototype object of newObj

