//to day i learn  nested array
const arr= [[1,2],[3,4],[5,6]];
console.log(arr[2]);

//start learn array and function
let array = ["orange","blue","green"];
console.log(array);
//insert element 
array.push("yellow");
console.log(array);
//remove element from last one
array.pop();
console.log(array);
//checked if any colors include in colors array
let check= array.includes("orange");
console.log(check);
//using for each
array.forEach(function(array) {
  console.log(array);
});
//using loop in array
for (let i = 0; i < 2; i++) {
    console.log(array[i]);
  }
  let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = numbers.map(num => num * 2);
console.log(numbers);
console.log(doubledNumbers);
//replace blue with orange
let replaced = array.map(array => array === "blue" ? "orange" : array);
console.log(replaced);
//convert object into array
let userObject = { id: 1, name: "John", age: 25 };
let userArray = Object.entries(userObject);
console.log(userObject);
console.log(userArray );
//convert array into object
let keyArray = [["name", "Alice"], ["age", 30], ["city", "New York"]];
let reconstructedObject = Object.fromEntries(keyArray);
console.log(keyArray);
console.log(reconstructedObject);