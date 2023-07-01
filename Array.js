let car = ["Thar","Scorpio","Nexa"] //Declaration of array
console.log(car); //accessing whole array
console.log(car[1]);

// ** Array Properties and Methods

// 1. length:-
// The length property of an array returns the length of an array (the number of array elements).
let book = ["English","Physics","Science","History"]
console.log(book.length);

// 2. Accessing first element of array:-
console.log(book[0]);

// 3. Accessing last element of array:-
console.log(book[book.length-1]);

// 4. How To Recognise Array:-
console.log(Array.isArray(book)); //Returns true if given argument is array else it returns false.

// 5. Convert Array to a String using toString() function
// solution 1-
console.log(book.toString());
// solution 2-
console.log(book.join(" ")); 

// 6. Pushing new element in array:-
console.log(book.push("Computer Science")); //The push() method adds a new element to an array (at the end):
console.log(book);

// 7. The pop() method removes the last element from an array:-
// book.pop()
let element = book.pop();
console.log(element); // The pop() method returns the value that was "popped out":
console.log(book);

// 8. The shift() method removes the first array element:-
book.shift(); //The shift() method returns the value that was "shifted out"
console.log(book);

// 9. The unshift() method adds a new element to an array (at the beginning)
book.unshift("Chemistry");
console.log(book);

// 10. Merging Arrays:-
let book2 = ["Hindi","English","Social Science"]
let newArray = book.concat(book2); //The concat() method can take any number of array 
console.log(newArray); 

// 11. The splice() method can be used to remove items from an array:-
newArray.splice(1,1); //first argument - index
                      // second argument - length. upto where you want to remove an element
console.log(newArray);

// 12. indexOf() it gives position of element
console.log(newArray.indexOf("Science"));

// 13. Empty an array
newArray = [];
console.log(newArray);