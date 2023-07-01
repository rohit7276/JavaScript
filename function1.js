// **** Declaring a function *****
function add(a,b) {
    console.log(a+b);
}

// **** Calling a function ****
add(2,4);

// *** Declaring, calling and returning a value
function addition(a,b) {
   return a+b;
}

let result = addition(20,30);
console.log(result);

// ****
function multiply(a,b) {
   let result = a*b;
   return result; 
}

let m = multiply(2,2);
console.log(m);

// ****
function compare(a,b){
    if (a>b) {
        return "Positive";
    } else {
        return "Negative"
    }
}

let res = compare(2,4);
console.log(res);

// *** Function Hosting ****
// In JavaScript, you can use a function before declaring it. For example:

show();

function show() {
   console.log("i am hosting Javascript function"); 
}