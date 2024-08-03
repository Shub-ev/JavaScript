// classes works as the mold to the object
// object are the instances of the class


// ******   01   ******* classes
class Person {
    // name                 // no need to specify the memeber properties we can initialize or set member properties from
    // constructor
    constructor(name){  // constructor method
        this.name = name;  // setting member property 
    }

    // The constructor is defined using the constructor keyword. Just like a constructor outside a class definition, it will:

    // 01 . create a new object
    // 02 . bind this to the new object, so you can refer to this in your constructor code
    // 03 . run the code in the constructor
    // 04 . return the new object.

    greet(){   // method/member function
        console.log(`Hello I am ${this.name}`);  
    }
}

let john = new Person("John Doe"); // creating instance of person class using constructor 
john.greet(); // calling a greet method of john object


// ******   02   ******* inheritance
// this class inherits all the properties and methods of parent class Person
class Teacher extends Person{
    constructor(name, sub){
        super(name);
        this.subject = sub;
    }

    greet() {  // this greets overrides base method greet and this method will be reffered for Teacher object
        console.log(`Hello I am ${this.name} and I am a teacher of ${this.subject}`);
    }
}

let mathTeacher = new Teacher("John", "Maths");
mathTeacher.greet();



// ******   03   ******* Encapsulation
class Student extends Person{
    // now here is the field we want to make private and dont allow to access directly from outside but 
    // allow within the object/instance of class this is done by making that property private this is done by # operator

    #religion;  // ** private data property **
    
    constructor(name, religion){
        super(name);
        this.#religion = religion;
    }

    #greet(str){   // this is a private method hence cannot be accessed from the outside
        console.log(str);  
    }

    greetStudent(){
        this.#greet(`Hello I am ${this.name} and I am a Student ${this.#religion}`)
    }
}

let student1 = new Student("Hari", "Atheis");
// student1.greet() if you do this it will print "Hello I am Hari" as greet is not accessible for student object ans it will access the parent's method 
student1.greetStudent();
console.log(student1.religion); // this will not work bcoz religion is private property and canot be accessed outside
// console.log(student1.#religion);  accessing like this will give ("Private field '#religion' must be declared in an enclosing class") this error
