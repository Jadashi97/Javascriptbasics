
// function foo(x) {
//     if (x < 1) {
//         return "Less than one";
//     }   else if (x < 2) {
//         return "Less than two";
//     }   else {
//         return "Greater than or equal to two";
//     }
// }
// console.log(foo(1))

// function orderMyLogic(val) {
//     if (val < 10) {
//       return "Less than 10";
//     } else if (val < 5) {
//       return "Less than 5";
//     } else {
//       return "Greater than or equal to 10";
//     }
//   }
  
// console.log(orderMyLogic(7));

// // writing a chained if/else statement
// function chainedIfElse(num) {
//   if (num < 5) {
//     return "Tiny";
//   } if (num < 10) {
//     return "Small";
//   } if (num < 15) {
//     return "Medium";
//   } if (num <20) {
//     return "Large";
//   } if (num >= 20) {
//     return "Huge";
//   } return "Change Me";
// }
// console.log(chainedIfElse(100));


// //returning boolean values from fuctions   
// let isMore = (a,b)=>{
//   if (a < b){
//     return true;
//   }
//   else{
//     return false
//   }
// } 
// console.log(isMore(2,6));


// let isLess = (a,b)=>{
//   return a < b;
// }
// console.log(isLess(12,7));

// // return early pattern for function 
// function myFun() {
//   console.log("lokose");
//   return "second";
//   console.log("byebye")
// }
// console.log(myFun());

// let abTest = (a,b)=>{

// }

// let myfamo = (a,b)=> {
//   if (a < 3 || b < 3) {
//     return undefined;
//   }
// }
// console.log(myfamo(0,0));

// Counting cards

let count = 0; //set count variable

function cardCounting(card) {

  var regex = /[JQKA]/; //set the regular expression to handle 

  if(card >= 2 && card <= 6){
    count++;
  }else if(card === 10 || card === regex.test(card)){
    count--;
  }

  if(count > 0){
    return card + " Bet"
  }else if( count < 0){
    return card + " Hold"
  }
};

console.log(cardCounting(10));

