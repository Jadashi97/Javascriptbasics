
// #1 if statement
function test (myFam){
    if (myFam) {
        return "It was true";
    }
    return "It was false ";
}
console.log(test(true));
//console.log(test(true));

// #2 with equality operators
function equalityTest(myVal){
    if (myVal == 10){
        return "Equal";
    }
    return "Not Equal";
}
console.log(equalityTest(10));

// #2 
function findingCars(camry) {
    if (camry == "red"){
        return "yes thats mine";
    }
    else "nahh thats not mine";
}
console.log(findingCars("red"));

// #3 using infor to pusrchase something online

// let userLoggedIn = true;
// let verifiedEmail = false;
// let cardInfor = false;


if (userLoggedIn){
    console.log("please continue to the next step");
    if (verifiedEmail){
        console.log("zoot keeep going to the next step");
        if (cardInfor){
            console.log("please pay up here!! ")
        }
    }
}

// #4 using infor to pusrchase something online
let userLoggedIn = true;
let verifiedEmail = true;
let cardInfor = true;

if (userLoggedIn && verifiedEmail && cardInfor){
    console.log("awesome, You are allowed to buy the goodies");
    
} else{
    console.log("please one of your infor is not right!!!!");
}


// ITERATING FOR LOOPS


for(let i = 1; i < 6; i++){
  myArray.push(i);
}

//iterating odd numbers with a for loop

for(let i = 1; i < 10; i+=2){
  myArray.push(i);
};

// counting backwards with a for loop
const myArray = [];

for(let i = 9; i > 0; i-=2){
    console.log(myArray.push(i));
}

//iterating thru an array with a for loop

const theArr = [2, 3, 4, 5, 6];

let total = 0;
//this iterates the numbers in the array until it gets to the index below that is needed

for(let i = 0; i < theArr.length; i++){

  //so this adds all the numbers in the array to give a total of 20
  console.log(total += theArr[i]);
}


//Nesting forloops   ........ pls finish this!!!!!!!!

function multiplyAll(arr){
    let product = 1;
    
    // this goes within the code and picks what needs to be iterated and finds the product and spits that out
    for(let i = 0; i < arr.length; i++){
        for(let j= 0; j< arr[i].length; j++){
            product *= [i][j];
        }
    }
    return product;
}
var product = multiplyAll([[1, 2], [3, 4], [5, 6, 7]])
console.log(product);

//ITERATING WHILE LOOPS AND DO WHILE LOOPS

//while looop

const myCont = [];

let i = 0;

while(i < 7 ){
    myCont.push(i);
    i++;
}
console.log(myCont);

//do while loops

do{
    i++;
    console.log(myCont.push(i)); 
}while(i < 5)

//idea behind recursion finding a key inside a box of boxes

// using iterative finish this and understand the whole idea behind recursion

const arr = [1,4,2,5,3];


function multiply(arr, n){
    if(n <= 0){
        return 1;
    }else{
        return multiply(arr, n-1) * arr[n-1];
    }
}


//this is a recursive functions that returns the first n elements of an array
function sum(arr, n){
    if (n <= 0){
        return 0;
    }else{
        return sum(arr, n-1) + arr[n-1];
    }
}

console.log(sum(arr, 5));

// this is a challenge to look up a person using either the property or the name the person
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  


function lookUpProfile(name, prop){
    for(let i = 0; i < contacts.length; i++){ // loops thru the whole array
      if(contacts[i].firstName === name){
        if(contacts[i].hasOwnProperty(prop)){ //sees if the the objects has a property (prop) then returns a boolean
          return contacts[i][prop];
        }else{
          return "No such property"
        }
      }
    }
    return "No such contact"
}
console.log(lookUpProfile("Kristian", "lastName"));


//TERNARY OPERATORS
//oneline 
function checkEqual(a, b) {
  return a === b? "Equal" : "Not Equal"
}
console.log(checkEqual(1, 2));

// multiple line ternary
function checkSign(num) {
  return (num > 0)? "Positive"
  :(num === 0 )? "zero"
  :"Negative"

}

console.log(checkSign(-1));

