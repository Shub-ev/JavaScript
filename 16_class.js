// classes works as the mold to the object
// object are the instances of the class

class Person {
    // name                 // no need to specify the memeber properties we can initialize or set member properties form
    // constructor
    constructor(name){  // constructor method
        this.name = name;  // setting member property 
    }

    greet(){   // method/member function
        console.log(`Hello I am ${this.name}`);  
    }
}

let john = new Person("John Doe"); // creating instance of person class using constructor 
john.greet();
