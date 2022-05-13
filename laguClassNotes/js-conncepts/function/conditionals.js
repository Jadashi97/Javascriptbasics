// // Data types - strings, number, objects, arrays, date
const { log } = console; // object destructuring

const num = 3;
let age = "3";
// ==
log(num == age);

// ===
log(num === age); // exact/strict

const userNames = ["Justin", "john", "Mama", "Aman", "Emma", "Juma"];

const jUserNames = [];

for (let i = 0; i < userNames.length; i++) {
	// making decision
	if (userNames[i].toUpperCase().startsWith("J")) {
		// do something
		jUserNames.push(userNames[i]);
	}
}

log(`There are ${jUserNames.length} number of users with name starting with J`);

// Conditionals

/*
- Conditionals are decisional -> directions
- expression that depends on its evaluation value to true/false (booleans)
*/

const itsRaining = true;

if (itsRaining) {
	// carry umbrella
	// log("I am carrying umbrella because it's raining");
} else {
	// walk without umbrella
	// log("No need to carry umbrella, it's not raining");
}

// convert the following to ternery operator

let trafficLight = "red";

if (trafficLight === "red") {
	console.log("stop");
} else if (trafficLight === "green") {
	console.log("go");
} else if (trafficLight === "yellow") {
	console.log("go with caution");
} else {
	console.log("drive");
}

// Ternary version of the above
trafficLight === "red" ? log("stop!") : "green"? log("green"): "yellow"? log("go with caution"): log("drive")

// Other conditional condition
// Ternary operation

trafficLight === "red" ? log("Stop!") : log("Go!"); // assignment: write else if version for this.

// the if else version of the ternary operation above

let light = "purple";

if (light === "red"){
    console.log("Stop");
}else if(light != "red"){
    console.log("Go!");
}else{ //not entirely sure if i need this last else since its not referenced in the ternery opearator
console.log("Go");
}

// nullcoalescence
itsRaining && log("carry umbrella");
!itsRaining && log("leave umbrella");

// // Switch statement