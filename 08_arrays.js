// array is a way to store hetero-geneous data in the single var
// array is also an object

arr = [1, "Shubham", true, null, undefined, 1,[1, 2, 3, 4, 5]] //array is a colletion of data types 
console.log(typeof arr);

//get the index of the item
console.log(arr.indexOf(1)); //gives the index of the first occurance of the object

//insert data at end
let newLen = arr.push(1, 4, " ") //method is used to push one or more data & ******returns new length
console.log(newLen);

//insert data at start
arr.unshift("Shubham") //insert the data at the first index of arr

//remove the data
arr.pop(); //removes the last element from the arr
arr.shift(); //remove the first element from the arr
arr.splice(3, 2) //remove 2 elements from index 3


console.log("\n\n\n\n");
//accessing each element using for each loop
for(let a in arr){  //a becomes the index
    console.log(arr[a]);
}

console.log("\n\n\n\n");
for(let a of arr){
    console.log(a);  //a becomes the element of the array
}
console.log("\n\n\n\n");

//**************map array******************
arr2 = [1,2,3,4,5,6,7,8]
function double(num){
    return (num * 2);
}
let newArr = arr2.map(double);
console.log(newArr)


//filter the array or make array of only seletctive elements
let arr3 = ["Shubham", "Mahesh", "Gharage", "Another", "Dune"]
let arr4 = [1, 2, 3, 4, 5 , 7];
function isSelected(num){
    return num.length < 5;
}
function isGreater(num){
    return (num > 2);
}

let newArr2 = arr4.filter(isGreater); //filter function takes element from arr4 and pass it to function isGreater
//and if it returns true then it is added in the new array else rejected
console.log(newArr2);



//split the string and create array object
let str = "shubham; age : 20; phone: 9658517111";
let arr5 = str.split(";");
console.log(arr5);

//join array string into single
let str1 = arr5.join("; ");
console.log(str1);

let str2 = arr5.toString();
console.log(str2);