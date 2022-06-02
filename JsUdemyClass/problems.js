
//function to merge two strings alternatively while joining character by character
function merge(str1, str2){

    //set up variables to store characters that are split to a string 
    let a = str1.split("").filter(Boolean); //passes each item in the array to a Boolean object to determine if true or false

    let b = str2.split("");

    let mergedString = " "; 

    for(let i = 0; i < a.length || i < b.length; i++){ //this loops through and checks if the i < a.length or i<b.length
        if(i < a.length) // if i < a.length,  
            mergedString += a[i]; // add a[i] to the string first
        if(i < b.length) //then check if i < b.length
            mergedString += b[i]; //add b[i] to the string next
        }
    return mergedString; // otherwise return the string
};

console.log(merge('abc',""));
