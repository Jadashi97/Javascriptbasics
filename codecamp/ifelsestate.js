/*
function foo(x) {
    if (x < 1) {
        return "Less than one";
    }   else if (x < 2) {
        return "Less than two";
    }   else {
        return "Greater than or equal to two";
    }
}
console.log(foo(1))

function orderMyLogic(val) {
    if (val < 10) {
      return "Less than 10";
    } else if (val < 5) {
      return "Less than 5";
    } else {
      return "Greater than or equal to 10";
    }
  }
  
console.log(orderMyLogic(7));

// writing a chained if/else statement
function chainedIfElse(num) {
  if (num < 5) {
    return "Tiny";
  } if (num < 10) {
    return "Small";
  } if (num < 15) {
    return "Medium";
  } if (num <20) {
    return "Large";
  } if (num >= 20) {
    return "Huge";
  } return "Change Me";
}
console.log(chainedIfElse(100));


//returning boolean values from fuctions   
let isMore = (a,b)=>{
  if (a < b){
    return true;
  }
  else{
    return false
  }
} 
console.log(isMore(2,6));


let isLess = (a,b)=>{
  return a < b;
}
console.log(isLess(12,7));

// return early pattern for function 
function myFun() {
  console.log("lokose");
  return "second";
  console.log("byebye")
}
console.log(myFun());

let abTest = (a,b)=>{

}

let myfamo = (a,b)=> {
  if (a < 3 || b < 3) {
    return undefined;
  }
}
console.log(myfamo(0,0));
*/

// Counting cards

let count = 0;
function cardCounting(card) {
  switch (card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count ++;
      break;
    case 10:
    case "K":
    case "Q":
    case "A":
    case "J":
      count --;
      break;
  }
  var holdbet = "Hold";
  if (count > 0){
    holdbet = "Bet";
  }
  return count + " " + holdbet;
}
console.log(cardCounting(4));



