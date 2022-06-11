// //reverse a string

// function reverseString(str) {
//     return str
//     .split("") //this splits it
//     .reverse()//reverses it 
//     .join(""); //joins it back
// }
  
// // console.log(reverseString("hello"));


// //FACTORIALIZE A NUMBER
// function factorialize(num) {
//     if(num === 0){ //check this first
//       return 1; //return this when true 
//     }else{
//         return num * factorialize(num - 1);
//     }
// }
  
// console.log(factorialize(5));

// // find longest word in a string

// function findLongestWordLength(str) {
//     let x = str.split(" "); //set a variable to keep the split words
//     let maxLength = 0;
//     for(let i = 0; i < x.length; i++){ //loop thru the  words
//         if(x[i].length > maxLength){ //find the word with the longest length
//            maxLength =  x[i].length;
//         }
//     }
//     return maxLength;
// }
  
// console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));