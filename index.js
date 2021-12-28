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

// let numbers = [5, 10, 15, 20, 25, 30]
// console.log("Before push operation",numbers);
// numbers.push(35);
// console.log("After push operation",numbers);

// -------------------------------------------------------

//pop : helps you to remove the last element from the array
// console.log("Before pop operation",numbers);
// numbers.pop();
// console.log("After pop operation",numbers);

// -------------------------------------------------------

//shift : helps you to remove the first element from the array
// console.log("Before shift operation",numbers);
// numbers.shift();
// console.log("After shift operation",numbers);

// -------------------------------------------------------

//unshift : helps you to add the element at the start of the array
// console.log("Before unshift operation",numbers);
// numbers.unshift(5);
// console.log("After unshift operation",numbers);




// slice function
// returns a new array from the selected indexes. It will not manipluate the existing array.
// startIndex : element at this index will be included in the new array/
// endIndex : elements before this index will be included

// let arr = [1, 2, 3, 4, 5, 6];

// // const newArr = arr.slice(startIndex, endIndex);
// const newArr = arr.slice(1, 4); // [2, 3, 4]
// console.log(newArr, arr);

// const arr = [ 2, 4, 5, 6, 7, 8]


// 1 = 0 = -6
// 2 = 1 = -5
// 3 = 2 = -4
// 4 = 3 = -3
// 5 = 4 = -2
// 6 = 5 = -1

//  Question  : Array given is arr = [1, 2, 3, 4, 5, 6];. Please write down the slice function which returns a new array as [2, 3, 4]. Notes :: Indexes should be

// const newArr2 = arr.slice(-5, -2);
// console.log(newArr2);

// [6]



//  SOME AND EVERY FUNCTIONS :::::::::::::::::;

var arr = [ 2,  4,  6];

//some & every = Both these functions takes in a condition and checks if all the elements in the array is satisfying that condition or not. they always returns you boolean value which means true or false.  

// some :  In this case, if even one element satisfies the condition then true will be returned.
// every : All and every element should satisfy the condition

// => ::::  arrow function

// const value = arr.some(n => n%2 == 0);
// const value2 = arr.every(n => n%2 == 0);
// console.log(value, value2);


//regular 
// function functionName () {
//     console.log("hello");
// }
// functionName()

// // named function, function expression
// const a = function (){
//     console.log("A");
// }
// // a()

// // arrow function
// const b = (cb) =>{
//     console.log("heyy World");
//     cb();
// } 

// b(functionName);














//LOOPS : 
// in case of arrays loops basically helps you to iterate through each and every element.
// map, reduce, filter


//Question : double all the elements of the array
// let arr = [1, 2, 3, 4, 5]

// // for (let index = 0; index < arr.length; index++) {
// //     console.log(arr[index] * 2);
// // }

// // map function iterates through each element of the array, and do the required operation, then returns a new array.
// const newArr = arr.map( n => n * 2 );
// console.log(newArr);


// map : helps you to manipulate all the items in an array
// reduce : helps you to use all the items and return a single value
// filter : applies a condition on all the elements, return you new array.


var salary = [5000, 6000, 7000, 3000, 4000];

//  filter out salaries which is greater than 3000.

// var newSalary1 = salary.filter(x => x > 3000);
// console.log("after filter",newSalary1);


// // double the salary of all emp whose salary is greater than 3000

// var newSalary2 = newSalary1.map(y => y * 2);
// console.log("after map",newSalary2);


// const newSalary = salary.filter(function (x){
//     return x > 3000
// }).map(x => x * 2);

const newSalary = salary.filter(x => x > 3000).map(x => x * 2);

console.log(newSalary);


// reduce function 

