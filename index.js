console.log("Hello");

// Arrays : Array is a datatype in JS. It can store values of any data type

// let x =



// length of an array = to find out the number of elements present inside an array 

// const lenOfUser = user.length;
// const lenOfEmp = employee.length;

// console.log(lenOfUser, lenOfEmp);


// how to access these values individually
// console.log("employee[1]",employee[1]);



// ii.Arrays Methods - map, filter, reduce, index, push, pop, shift, unshift, slice, some, every

// -------------------------------------------------------

//push : helps you to add the new element at the end of the array

let numbers = [5, 10, 15, 20, 25, 30]
console.log("Before push operation",numbers);
numbers.push(35);
console.log("After push operation",numbers);

// -------------------------------------------------------

//pop : helps you to remove the last element from the array
console.log("Before pop operation",numbers);
numbers.pop();
console.log("After pop operation",numbers);


// -------------------------------------------------------

//shift : helps you to remove the first element from the array
console.log("Before shift operation",numbers);
numbers.shift();
console.log("After shift operation",numbers);


// -------------------------------------------------------

//unshift : helps you to add the element at the start of the array
console.log("Before unshift operation",numbers);
numbers.unshift(5);
console.log("After unshift operation",numbers);