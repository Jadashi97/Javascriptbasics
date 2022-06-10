//reverse a string

function reverseString(str) {
    return str
    .split("") //this splits it
    .reverse()//reverses it 
    .join(""); //joins it back
}
  
// console.log(reverseString("hello"));


//FACTORIALIZE A NUMBER
function factorialize(num) {
    let val = 1;
    for(let i = 2; i <= num; i++){
        val = val * 1; 
    }
    return val;
}
  
console.log(factorialize(5));