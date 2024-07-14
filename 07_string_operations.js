str = "Master JavaScript Master" //str is string variable which is also an string object instance
console.log(typeof str);


//find the character at a specific location
console.log(str[6]);

//find the length of the string object
console.log(str.length);


//check if string contain a substring
// 1. includes()
console.log(str.includes("Master"))
// 2. startsWith()
console.log(str.startsWith("Mast"));
// 3. endsWith()
console.log(str.endsWith("Script"));


//find position of the substring
// 1. indexOf()
console.log(str.indexOf("ster")); //returns the starting index of the first occurance of the substring
const indexOfFirstOccurance = str.indexOf("ster");
console.log(str.indexOf("x")); //returns -1 because it is not present in the string
console.log(str.indexOf("ster", indexOfFirstOccurance + 1)); //prints the index of first index of the second occurane of the substring hence we 
// pass next index of the current occurance as second parameter

                                            
//extracting substring from the string 
console.log(str.slice(2, 6)) //slice the string from the original string and return the string[first character index, last character index(excluded)]
console.log(str.slice(2)); //prints every thing since 2 as there is no ending condition


//chagning the case of the string
console.log(str.toLowerCase());
console.log(str.toUpperCase());


//updating part of the string
console.log(str.replace('ster', "STER")); //returns new string with replaced first instance of the specified substring with provided substring
console.log(str.replaceAll("Ma", "ma")); //returns new string which replaces all instances of the substring with specified string


//spliting the string object into number of string objects on the basis of common attribute " "
console.log(str.split(" "));

city = "lanDon"
city = city.toLowerCase()
city = city[0].toUpperCase() + city.slice(1)

console.log(city);