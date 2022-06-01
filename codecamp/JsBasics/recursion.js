// function countdown(n){
//     if(n < 1){
//       return [];
//     }else{
//       const countArray = countdown(n - 1);
//       //use unshift to add to the beginning
//       countArray.unshift(n);
//       return countArray;
//     }
// };

// console.log(countdown(5));

function rangeOfNumbers(startNum, endNum) {
  if(endNum - startNum === 0){ //this verifies that the diff btn the 2 args 
    return [];
  }else{
    const countArr = rangeOfNumbers(startNum, endNum - 1); //variable to handle the logic
    countArr.push(endNum); //push the answer as the endNum 
    return countArr;
  }
};

console.log(rangeOfNumbers(1, 9));