// >>> String 'length' <<<

let str;
str = "Mumbai";
console.log(str.length); //To calculate length of string

// >>> String 'charAt()' <<<
// The charAt() method returns the character at a specified index (position) in a string

str = "JavaScript";
console.log(str.charAt(1));


// >>> String concatination <<<
// This can be done using two ways - 1. using + operator 2. Using concat()

let str1 = "Aamchi";
let str2 = "Mumbai";

console.log(str1+" "+str2);
console.log(str1.concat(" ",str2));


// >>> substr() <<<

let str3 = "This is JavaScript Tutorial.";
console.log(str3.substring(8,27)); //end number -1


// >>> indexOf() <<<

let str4 = "Hello world, welcome to the universe"

// search a index/occurance of welcome string
console.log(str4.indexOf("welcome"));

// find the first occurance of e 
console.log(str4.indexOf("e"));

// find the first occurance of 'e' after the position 5
console.log(str4.indexOf("e",5));

let str5 = "This is JavaScript tutorial. This is good."
console.log(str5.indexOf("is")); //searching from front
console.log(str5.indexOf("is",6));
console.log(str5.lastIndexOf("This")); //The lastIndexOf() method returns the index (position) of the last occurrence of a specified value in a string.

console.log(str5.indexOf("iss"));
// The lastIndexOf() method returns -1 if the value is not found.

// >>> To remove white space <<<
let str6 = "  This is JavaScript  ";
console.log(str6);
console.log(str6.trim()); // It removes white space at front and back of the string
console.log(str6.trimStart()); // It removes white space at front.
console.log(str6.trimEnd()); // It removes white apace at end.

// >>> Uppercase and Lowercase
let str7 = "I am Rohit";
console.log(str7.toUpperCase());
console.log(str7.toLowerCase());

// >>> Replace Function <<<
console.log(str7);
console.log(str7.replace("Rohit","Jyoti"));

// >>> The includes() method returns true if a string contains a specified string.Otherwise it returns false.
let str8 = "I am learning JavaScript"
console.log(str8.includes("am"));