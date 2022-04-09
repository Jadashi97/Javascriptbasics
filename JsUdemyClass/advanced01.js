// using the chrome developer tools



// concepts behind a calculator and Higher order functions(passing a function into as arguments)

function add(num1, num2){
    return num1 + num2
};

function multiply(num1, num2){
    return num1 * num2
};

function subtract(num1, num2){
    return num1 - num2
};

function divide(num1, num2){
    return num1 / num2
};


function calculator(num1, num2, operator){
    return operator(num1, num2)
};

console.log(calculator(6,3,divide));


