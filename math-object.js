let x;

// 1. Round Number
x = Math.round(4.7);
console.log(x);

x= Math.round(4.2);
console.log(x);
// Note :- the argument is greater than 0.5, the argument is rounded to the integer with the next higher absolute value. If it is less than 0.5, the argument is rounded to the integer with the lower absolute value.

// 2. The Math.ceil() method rounds a number rounded UP to the nearest integer (next higher absolute value).
x = Math.ceil(2.2);
console.log(x);

x = Math.ceil(2.5);
console.log(x);

// 3. The Math.floor() method rounds a number to nearest integer (lower absolute value)
x = Math.floor(2.7);
console.log(x);

x = Math.floor(2.9);
console.log(x);