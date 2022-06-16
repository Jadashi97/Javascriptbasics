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
//   // Only change code below this line
//   console.log(s[0] = 2,
//             s[1] = 5,
//                 s[2] = 7);
//   // Using s = [2, 5, 7] would be invalid

//   // Only change code above this line
// }
// editInPlace();

// //Prevent object mutation
// function freezeObj() {
//     const MATH_CONSTANTS = {
//       PI: 3.14
//     };
//     // Only change code below this line
//     Object.freeze(MATH_CONSTANTS);
  
//     // Only change code above this line
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

// // Only change code below this line
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


// Catch Off By One Errors When Using Indexing

function countToFive() {
  let firstFive = "12345";
  let len = firstFive.length;
  // Only change code below this line
  for (let i = 0; i < len; i++) {
  // Only change code above this line
    console.log(firstFive[i]);
  }
}

countToFive();