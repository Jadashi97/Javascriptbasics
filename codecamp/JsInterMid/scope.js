// //compare let and var keys
// function checkScope() {
//     let i = 'function scope';
//     if (true) {
//        let i = 'block scope';
//       console.log('Block scope i is: ', i);
//     }
//     console.log('Function scope i is: ', i);
//     return i;
// };

// console.log(checkScope());

// //mutate an array declared with const
// const s = [5, 7, 2];
// function editInPlace() {
//   console.log(s[0] = 2,
//             s[1] = 5,
//                 s[2] = 7);
// }
// editInPlace();

// //Prevent object mutation
// function freezeObj() {
//     const MATH_CONSTANTS = {
//       PI: 3.14
//     };
//     Object.freeze(MATH_CONSTANTS);
    
//     try {
//       MATH_CONSTANTS.PI = 99;
//     } catch(ex) {
//       console.log(ex);
//     }
//     return MATH_CONSTANTS.PI;
//   }
//   const PI = freezeObj();
//   console.log(PI);

// // set default parameters for functions
// const increment = (number, value) => {
//   if(value = " "){
//     return number++;
//   }else{
//     return number + value};
// };

// console.log(increment(2, ));


// // use Rest parameters with function parameters

// const sum = (...args) => { //this allows us to use multiple arguments
//   return args.reduce((a, b) => a + b, 0);
// }

// // console.log(sum(2,4,3,5,3));


// ////destructuring assignment to extract values
// //
// const HIGH_TEMPERATURES = {
//   yesterday: 75,
//   today: 77,
//   tomorrow: 80
// };
// //below is a destructured form of the above

// const {today,tomorrow, yesterday} = HIGH_TEMPERATURES;

// // Use Destructuring Assignment to Assign Variables from Nested Objects
// const LOCAL_FORECAST = {
//   yesterday: { low: 61, high: 75 },
//   today: { low: 64, high: 77 },
//   tomorrow: { low: 68, high: 80 }
// };

// const {today:{
//   low: lowToday,
//   high: highToday
// }} = LOCAL_FORECAST;

// console.log(highToday);

// // Use Destructuring Assignment to Assign Variables from Arrays

// let a = 8, b = 6;
// [a, b] = [b, a];
// console.log(a);


// // Catch Off By One Errors When Using Indexing

// function countToFive() {
//   let firstFive = "12345";
//   let len = firstFive.length;
//   // Only change code below this line
//   for (let i = 0; i < len; i++) {
//   // Only change code above this line
//     console.log(firstFive[i]);
//   }
// }

// countToFive();

// //destructuring assignments with the Rest parameter to Reassign Array  elements

// const source = [1,2,3,4,5,6,7,8,9,10];
// function removeFirstTwo(list) {
//   const [a,b,...arr] = list; //use destructuring and spread the Rest parameter values in arr

//   return arr;
// }
// const arr = removeFirstTwo(source);

// console.log(arr);

// // Use Destructuring Assignment to Pass an Object as a Function's Parameters

// const stats = {
//   max: 56.78,
//   standard_deviation: 4.34,
//   median: 34.54,
//   mode: 23.87,
//   min: -0.75,
//   average: 35.85
// };

// const half =({max, min}) => (max + min)/2.0;

// console.log(half);


// Create Strings using Template Literals

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = []; //set up an empty array
  for(let i = 0; i < arr.length; i++){ //loop thru each item in the array and push it to the array
    failureItems.push(
      `<li class = "text-warning">${arr[i]}</li>,`)
  }
  return failureItems;
}

const failuresList = makeList(result.failure);

console.log(failuresList);