# notes on basics and syntax of javascript 
- /*
  used for multiline commenting
  **/

- Data Types:  undefined, null, boolean, string, symbol, number, and object
- // used for one line commenting
- var = used to set a variable
- let = also used to set a variable
- const = used to set a  const that cant be changed
- ;(semicolon) = used after every line of code
- console.log() = used to run code

 
# operators 
let a = a;
a = 1 + 1;
a = 1*1;
a = 1/1;
a += 1; (a = a+ 1)
a -= 1; (a = a - 1)
a *= 1; (a = a*1)
a /= 1; (a = a/1)
a ++; (a+a )
a --; = (a - a)
== (equal)
!== (not equal)
=== (used to equate btn a string and a number)
&& (logical and operator) - returns true if all operand are true 
|| (logical or operator) - returns true if either of operands is true
>= (greater than or equals to)
<= (less than or equals to)


# working with Arrays
- arrays work similar to LISTS in python
- they are mutable
- .pop(); - removes last charater
- .push(); - adds character at the end
- .shift(); - removes first character
- .unshift(); - adds first character
- .indexOf(); - used to locate a charater or can be used to prove a character isnt there.
- Array.from("Kose") - used to make Kose into ["K", "o", "s", "e"]


# formating a string 
( \ ) == escape character used before a second double quote
e.g  let name = "My name is, \" Nyarji Daniel Jada \" 

we can use both (' ') and (" ")
e.g ('My name is, "Nyarji Daniel Jada", also known as, "Lokose" ') 

- ` ${ } = used like for string formating `(notice the backtiks)

# how to run a js , html script.
- Iterm
cd into dir --> node/name.js/ --> run

- vscode Teminal
open terminal (ctr + ~) --> node/name.js/ --> run

- using html and js scrpt
html --> ! & Tab --> include the script --> then run it in the the folder
 
# Escaping sequences in strings
Code	Output
\'	single quote
\"	double quote
\\	backslash
\n	newline
\r	carriage return
\t	tab
\b	word boundary
\f	form feed
# conatenating strings 
- we can use "lokose " + "daniel "
- we can use +=

# constructing strings with variables
- we can use ( + )
- .length (used to find the length)



- 
# Functions 
  - group of related statements 
     - use the keyword function to declare it 
     - use function expression var, let or const to declare it
     - the IIFE(Immediately Invoked Function Expression) a.k.a anonymous function
# Functions VS methods
  - A method is a fuction within a class   
 # writing a function

  - function myName(){
    console.log("Daniel);
}
myName(); (this is calling a fuction)

- function with arguments and parameters
function myName(param1, param2){
    console.log(param1 + param2)
}
myName("lokose", "Daniel")

  # working with context under functions
    - Global context 
               - helps with the visibility of our variables and this can apply everywhere with in the code
    
    - execution context 
      - variable declarations - are scanned and made undefined
      - functions declarationd are scanned and made available
    
    - scope chaining (child grabs icecream from elders and not the other way round)
    
    - this  (to be discussed)           
