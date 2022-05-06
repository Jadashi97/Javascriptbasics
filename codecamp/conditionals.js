
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
    if (myVal ===10){
        return "Equal";
    }
    return "Not Equal";
}
console.log(equalityTest(10));

// #2 
function findingCars(camry) {
    if (camry === "red"){
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
if (userLoggedIn && verifiedEmail && cardInfor){
    console.log("awesome, You are allowed to buy the goodies");
    
} else{
    console.log("please one of your infor is not right!!!!");
}

//checking the logic behind while loops 

let i = 5;
// backwards 
while(i > 0){
    console.log(i);
    i--;
}
var n = 0
// forwards
while(n < 5){
    console.log(n);
    n++;
}


//checking the logic behind for loops
//backwards
for(let i = 10; i > 0; i -= 2){
    console.log(i);
}
// forwards
for(let i = 0; i < 10; i += 2){
    console.log(i);
}

// iterating thru an array and adding the total to the index of the array

const myArr = [2, 3, 4, 5, 6];
let total = 0;

for(let i = 0; i < myArr.length; i ++ ){
    console.log(total += myArr[i]);
};

//Nesting for loops technically working with an array within another array <finish this>

function multiplyAll(arr) {
    let product = 1;
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length[i]; j++){ 
            console.log(arr[i][j]);
        }
    }
    return product;
}
  
multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);