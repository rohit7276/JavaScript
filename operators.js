console.log("Operators in JavaScript")
let a = 45;
let b = 4;
console.log("a + b =",a+b);
console.log("a - b =",a-b);
console.log("a * b =",a*b);
console.log("a / b =",a/b);
console.log("a ** b =",a**b);
// This is exponential operator, i.e, 45 to the power 4

// *** Increment Operator ****
// JavaScript increment operator(++) is used to increase the value of the variable by 1.

let g = 1;
++g; //pre increment operator
g++; //post increment operator

//Ex.
let c = 10;
console.log(c++);
c++;
++c;
console.log(c);

// >>> Decrement operator <<<
// JavaScript decrement operator(--) is used to decrease the value of the variable by 1.

let h = 1;
--h; //pre decrement operator
h--; //post decrement operator

//Ex.
let n = 12;
console.log(n--);
--n;
n--;
console.log(n);

// Ex.
let d=15; 
console.log(d++ + ++d);

let e =20;
console.log(e++ + ++e + --e + ++e + e++);

let f=10;
console.log(f-=5);
console.log(f*=2);
console.log(f+=20);
