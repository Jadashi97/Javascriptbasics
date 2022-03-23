//bulding javascript objects
/*
    eg1. 
const cat = {
name: "whiskers",
legs: 4,
tails: 1,
enenemies: ["water", "Dogs"]
};

EX 1 
const myDog = {
name: "papichow",
legs: 4,
tails:1,
friends: ["babiny", "otot"]
};

//Dot Notation to acces object properties
//eg.2
const myObj = {
    prop1 : "val 1",
    prop2 : "val 2",
}
console.log(myObj.prop1);

//EX.2
const testObj = {
    hatValue : "hat",
    shirtValue : "shirt",
};
console.log(testObj.shirtValue);

// accesing objects with bracket Notation
const myFam = {
    "first born" :"Tom",
    "second born" :"lokose",
    "third born": "wani",
    "fourth born" : "Lemi",

};
myFam["first born"];

// accessing object properties with variables
const someObj = {
    propName: "John"
};

function propPrefix(str) {
    const s = "prop";
    return s + str;
}

const someProp = propPrefix("Name");
console.log(someObj[someProp]);
*/
//updating object properties
const ourDog = {
    "name":"Camper",
    "legs": 4,
    "tails":1,
    "friends":["eveything!"]
};
ourDog.name = "Happy Camper";
console.log(ourDog);
// adding new properties to javascript
