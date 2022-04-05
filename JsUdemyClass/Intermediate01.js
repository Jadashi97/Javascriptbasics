// // var myName = "lokose";
// // console.log(myName[0].toUpperCase() + "okose");

// // var num = 12;
// // console.log(num/=3);


// functions

// function getMilk(money) {

//     console.log("leaveHouse");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveRight");
//     console.log("moveRight");

//     console.log("buy " + calbottles(money, 1.5) + " bottles of milk")

//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("enterHouse");
//     return calbottles(money, 1.5)

// }

// function calbottles(initialPrice, perBottle) {
//     var numberOfBottles = Math.floor(initialPrice / perBottle);
//     return numberOfBottles;
// }
// getMilk(5);


// // Random Number generation

// var m = Math.random();
//     m = m * 100;
//     m = Math.floor(m) + 1/(100);
// console.log(m);

// // love Calculator
// prompt("What is your Name?");
// prompt("What is their Name?");

// var loveScore = Math.random() * 100;
// loveScore = Math.floor(loveScore)+1;
// console.log("Your loveScore is " + loveScore + "%");


// // including if else conditionals to the above
// prompt("What is your Name?");
// prompt("What is their Name?");

// var loveScore = Math.random() * 100;
// loveScore = Math.floor(loveScore)+1;

// if (loveScore > 60){
//   alert(loveScore + "%" + " That is pretty good, you two love each other like Kanye Loves Kanye");
// }else {
//   alert("Your loveScore is " + loveScore + "%");
// }


// // calculating BMI with if and else statement
// function bmiCalculator (weight, height) {
//     var bmi = weight / Math.pow(height, 2);
//     if (bmi < 18.5){
//        return "Your BMI is " + bmi + ", so you are underweight.";
//     } 
//     if (bmi > 18.5 && bmi < 24.9){
//         return "Your BMI is " + bmi + ", so you are normal weight."; 
//     }
//     if (bmi > 24.9){
//         return "Your BMI is " + bmi + ", so you are overweight."; 
//     }
//     return bmi;
// }

// console.log(bmiCalculator(70, 0.2));

// function isleapYear(year){
//     if (year%4===0){
//         if (year%100===0){
//             if (year%400===0){
//                 return "Leap year";
//             } else{
//                 return "Not a Leap year";
//             }
//         }else{
//             return "its a leap year";
//         }
//     } else{
//         return "Not a leap year";
//     }
// }
// console.log(isleapYear(1948));

// Arrays
// var guestlist = ["lokose", "lemi", "jabulani"];

//  if (guestlist.includes("jada")){
//     console.log("aloha");
//  }else{
//      console.log("nah next time");
//  }
 
// var nums = [];
// var count = 1;

// function printNums() {
//     while (count <= 100) {
//         if (count % 3 === 0 && count % 5 === 0) {
//             nums.push("FizzBuzz");
//         } else if (count % 5 === 0) {
//             nums.push("Fizz");
//         } else if (count % 3 === 0) {
//             nums.push("Buzz");
//         } else {
//             console.log(count);
//         }

//         count++;
//     }
// console.log(nums);   
// }
// console.log(printNums());



// // ideas behind while loops

// var i = 1;

// while (i <= 10){
//     console.log(i);
//     i++;
// }
// console.log (i);

// singing beers on wall song
// var bottles = 99;

// while (bottles >= 0){
//     console.log(`${bottles} bottles of beers of the wall. Take one down pass it around`);
//     bottles --;
// }
// console.log(bottles);


// // for loops
// var i = [];
// for(i=1; i<2; i++){
//     console.log("that is your value for i")
// }
// console.log(i);

// fibonacci sequence

function fibonaccigenerator(n) {
    var output = [];
    if (n === 1) {
        output = [0];
    } 
    else if (n === 2) {
        output = [0, 1];
    } 
    else {
        output = [0, 1];
        for (var i = 2; i < n; n++) {
            output.push([output.length - 2] + [output.length - 1]);
        }
    }
    return output;
}
output = fibonaccigenerator(3);
console.log(output);
