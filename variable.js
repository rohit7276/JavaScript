// ********* let and const are javascript variables********
// **** shortcut to open console**** ctrl+shift+j
let a=10;
let msg="My name is Rohit";
console.log(msg);
// let a=20;  duplicate is not allowed

// variable declaration
let b;
b=20;

// Multiple variables can be declared in a single line
let name="Rohit", age=24, city="pune"
console.log(city);

// Use const keyword to declare a constant variable in JavaScript.
const author="Rohit";
// author="Akash";   ***error  -value cannot be changed

// *** Variable Scope ***
// Global Variables
// Variables declared out of any function are called global variables. They can be accessed anywhere in the JavaScript code, even inside any function.

// Local Variables
// Variables declared inside the function are called local variables of that function. They can only be accessed in the function where they are declared but not outside.

let c=100;  
function addition() {
    let d=50;
}
// console.log(d);  local variables cant print outside of function
console.log(c);