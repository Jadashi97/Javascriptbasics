# notes on basics and syntax of javascript 
- /*
  used for multiline commenting
  **/

- /* Data Types:
- undefined, null, boolean, string, symbol, number, and object
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

# working with Arrays
- arrays work similar to LISTS in python
- they are mutable
- .pop() - removes last charater
- .push() - adds character at the end
- .shift() - removes first character
- .unshift() - adds first character


# formating a string 
( \ ) == escape character used before a second double quote
e.g  let name = "My name is, \" Nyarji Daniel Jada \" 

we can use both (' ') and (" ")
e.g ('My name is, "Nyarji Daniel Jada", also known as, "Lokose" ') 


# how to run js in both Iterm and vscode terminal
- Iterm
cd into dir --> node/name.js/ --> run

- vscode Teminal
open terminal (ctr + ~) --> node/name.js/ --> run
 
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

# working with string variables
[]


# some important functions
- ` ${ } = used like for string formating `(notice the backtiks)
- 
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
