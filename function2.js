// >>>> Storing function in variable <<<<

function add(a,b) {

    return a+b;
    
}
// >>> store function in variable <<<
let sum = add;

// >>> Using store function <<<
let result = sum(10,20)
console.log(result);

// >>>> Passing a function to another function <<<<
// Because functions are values, you can pass a function as an argument into another function.
function average(a,b,fn) {
    return fn(a,b)/2
}

let result1 = average(10,20,sum);
console.log(result1);
// we have pass the stored function as the argument


// >>>> Anonymous Function <<<<
// Anonymous functions are functions without names.
// Anonymous functions can be used as an argument to other functions or as an immediately invoked function execution.

// Declaring anonymous function
// function () {
//     console.log("Hello...!");
// }

// Immediate execution
setTimeout(function () {
    console.log("Hello...!");
},3000)

