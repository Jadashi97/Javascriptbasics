// //bulding javascript objects
// // eg1. 
// const cat = {
// name: "whiskers",
// legs: 4,
// tails: 1,
// enenemies: ["water", "Dogs"]
// };

// // EX 1 
// const myDog = {
// name: "papichow",
// legs: 4,
// tails:1,
// friends: ["babiny", "otot"]
// };

// //Dot Notation to acces object properties
// //eg.2
// const myObj = {
//     prop1 : "val 1",
//     prop2 : "val 2",
// }
// // console.log(myObj.prop1);

// //EX.2
// const testObj = {
//     hatValue : "hat",
//     shirtValue : "shirt",
// };
// // console.log(testObj.shirtValue);

// // accesing objects with bracket Notation
// const myFam = {
//     "first born" :"Tom",
//     "second born" :"lokose",
//     "third born": "wani",
//     "fourth born" : "Lemi",

// };
// myFam["first born"];

// // accessing object properties with variables
// const someObj = {
//     propName: "John"
// };

// function propPrefix(str) {
//     const s = "prop";
//     return s + str;
// }

// const someProp = propPrefix("Name");
// // console.log(someObj[someProp]);

// //updating object properties
// const ourDog = {
//     "name":"Camper",
//     "legs": 4,
//     "tails":1,
//     "friends":["eveything!"]
// };
// ourDog.name = "Happy Camper";
// // console.log(ourDog);
// // adding new properties to javascript   (just add the (.) and what to add)
// ourDog.bark = "woof woof"; 
// // console.log(ourDog);

// // deleting properties from javascript
// delete ourDog.legs
// // console.log(ourDog);

// // using objects for lookups (we can use the lookup key word to find an object within the function)
// // find out if lookup is deprecated
// function family(bros) {
//     let result = "";

//     var lookup = {

//         "firstBorn":"Tom",
//         "secondBorn": "Lokose",
//         "thirdBorn":"Wani",
//         "fourthBorn":"lemi",
//     };
//     result = lookup(bros);   
//     return result; 
// };
// // console.log(family("thirdBorn"));

// // testing objects for their properties
// const myObject = {
//     top: "hat",
//     bottom: "pants"
//   };

// function checkObj(myObject, checkProp) {
//     if(myObject.hasOwnProperty(checkProp)) {
//       return obj[checkProp];
//     }else {
//       return "Not Found";
//     }
//   };
// console.log(checkObj("top"));\

//Accesssing nested objects using the dot notation and accessing arrays 

// const my_apart = {

//     "apartment_4000":{
//         "room_201":{
//             "kitchen":"keys",
//             "living_room":"tv",
//         },
        
//         "bathroom":{
//             "sink":"toothpaste",
//             "toilet":"toilet_paper"
//         }
//     }

// };

// console.log( my_apart.bathroom.sink[0]);

// // record collection and manipulation of properties in objects

const myFamAchivements = {
    Bro1: {
        profession: 'Architecture',
        school: 'Bachelors',
        experience: '6years'
    },

    Bro2: {
        profession: 'Radiologist',
        school: 'Associate',
        experience: []

    },

    Bro3:{
        profession: 'Mechanic',
        school: [],

    }
};

