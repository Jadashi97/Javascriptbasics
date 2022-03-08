/*
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

let userLoggedIn = true;
let verifiedEmail = false;
let cardInfor = false;


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
*/
