// Type conversion is the process of converting data of one type to another.
// There are two types of type conversion in JavaScript.

// Implicit Conversion - automatic type conversion
// Explicit Conversion - manual type conversion

// >>>> Example 1: Implicit Conversion to String <<<<
// In certain situations, JavaScript automatically converts one data type to another (to the right type). This is known as implicit conversion.
let result;
result = "3"+2;
console.log(result);
console.log(typeof result);

result = "3" + true;
console.log(result);
console.log(typeof result);

// >>>> Example 2: Implicit Conversion to Number <<<<
let result1;
result1 = "3" - 2;
console.log(result1);
console.log(typeof result1);

result1 = "3" * 2;
console.log(result1);
console.log(typeof result1);

// >>>> Example 3: Non-numeric String Results to NaN <<<<
let result2;
result2 = "hello" - "world";
console.log(result2);
console.log(typeof result2);

result2 = 4 - "hello";
console.log(result2);
console.log(typeof result2);

// >>>> Example 4: Implicit Boolean Conversion to Number <<<<
let result3;
result3 = 4 + true;
console.log(result3);
console.log(typeof result3);

result3 = 11 + false;
console.log(result3);
console.log(typeof result3);

// In javaScript 'true' considered as '1' and 'false' considered as '0'

// >>>> Example 5: null Conversion to Number <<<<
let result4;
result4 = 8 + null;
console.log(result4);
console.log(typeof result4);

// In javaScript null is '0' when used with number