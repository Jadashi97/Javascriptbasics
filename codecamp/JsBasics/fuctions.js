//Working with Operators

// eg 1. calculations
//D = (L - S)/L * 100

var listingPrice = 286;
var sellingPrice = 437;

var discountPrice = (listingPrice - sellingPrice) /listingPrice * 100;
console.log(discountPrice);

// eg2. regular
function myName(){
    console.log("Nyarji Daniel Jada")

}
myName();

//eg3. functions with arguments 
function myFam(names){
    console.log(names);
}
myFam("lemi");

//eg4a. global vs local functios 
var myBro = "lemi";
function myBrothers(){
    myBro = "Toni";
    console.log();
}
console.log(myBro);

//eg4b.
let myBro = "lemi";
function myBro() {
    const myBro = "Tom";
    return myBro;
}
console.log(myBro);

//eg5. using a function without a return
let myFamo = 7;
function myFam (num){
    myFam = num + myFamo;

}
myFam(2);

//eg6. using a return value as a variable
let mySis = 1;

function myBros(num){
    return num - mySis;

}
myFam = myBros(6);


//eg7. working with user infor and using the backticks(``)
function userRole(name, role){
    switch(role) {
        case "Admin":
            return `${name} is the admin with all acces`;

        case "sub-Admin":
            return ` ${name} is the subAdmin with acces to create and delete`;
        
        case "testprep":
            return `${name} is the testprep and is tested and uses content.`;
        
        case "user":
            return ` ${name} is the user to consume the content`;
        
        default:
            return `${name} is a trial user`;
    }
}
console.log(userRole("Lokose", "sub-Admin"));

//eg8. not finised
let array = [1,2,3,4,5];
function nextInLine(array){
    array.push([6]);
    return array.shift(2);

}
console.log(nextInLine(array));


//usig the the fat arrow for functions
let myInfor = (name, age, job, car)=> {
    console.log(`My name is ${name}. I am ${age} and I am a ${job} plus I drive a ${car}.`)
}
myInfor("Nyarji", "43", "Fullstack web developer","Tesla" );



//use the parseInt function to with a Radix

function convertToInteger(str){
    //this converts any integer(str) to a binary number and returns it 
    return parseInt(str, 2);
};

console.log(convertToInteger("10011"));