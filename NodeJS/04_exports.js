// we can export code from current module and make available to other modules
// this is done by module.exports (module is global obj in CommonJS)

// here we are adding names property in exports object
module.exports.names = ["Shubham", "Mahesh", "Hari", "Akanksha"];

const allNames = (names) => {
    for(i of names){
        console.log("Hello "+i+"!");
    }
}

// module.exports = allNames;      // this overrides the previous implementation

// hence do as below

module.exports.allNames = allNames;

exports = {
    allNames,
}