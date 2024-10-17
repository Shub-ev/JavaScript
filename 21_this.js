// this represents current context

const obj = {
    user: "Shubham",
    age: 20,

    introduce: function(){
        console.log(`Hello my name is ${this.user} and my age is ${this.age} years!\n`);
        console.log(this);      // prints current object as its context
    },

    arrowIntro: () => {
        console.log(this+"\n");
    }
}

console.log(obj.introduce());
console.log(obj.arrowIntro());

function chai() {
    console.log(this);      // gives another 
}
chai();

const arrowFunc = () => {
    const user = "shubham";
    console.log(this);      // prints nothing
}
arrowFunc();