// Create a javascript object

let dog = {
    name: "Max",
    numLegs: 4,

    sayLegs:()=>{
        this.numLegs = 4;
        return "This Dog has " + this.numLegs +  " legs!!";
    }
};

//accessing the properties using dot Notation 
console.log(dog.name);
console.log(dog.numLegs);

//create a method within the above object
console.log(dog.sayLegs());

//"this" keyword makes code more reusable
