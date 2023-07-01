let book = ["Marathi", "Hindi", "English", "Science", "History"]

// *** Array Itration ***
// *solution 1:- Use of forEach loop
book.forEach(function (value, index) {
    console.log("Element at " + index + " is " + value);
});
// Here, we use anonymous function. Refer function2.js 

// *solution 2:- use of for loop
for (i = 0; i < book.length; i++) {
    console.log("Element at " + [i] + " is " + book[i]);
}

// *** Multi-Dimensional Array ***
let bookPages = [
    ["Marathi", "200"],
    ["Hindi", "300"],
    ["English", "400"]
]

console.log(bookPages[0][1]);
console.log(bookPages[1][0]);
console.log(bookPages[2]);

// let bookPages =[
//     index 0[0-"Marathi",1-"200"],
//     index 1[0-"Hindi",1-"300"],
//     index 2[0-"English",1-"400"]
// ]
