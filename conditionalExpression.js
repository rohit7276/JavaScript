let a = prompt("What is your age");
console.log(typeof a);
a = Number(a);
console.log(typeof a);

// ******* if statement ********
if(a>18)
{
    console.log("You can go for vote");
}

// ******* if else statement ******
if (a>18) {
    console.log("you can go for vote");
}
else{
    console.log("you can't vote");
}

// ****** if else if ******
if(a>18){
    console.log("You can go for vote");
}
else if (a>9 || a<18) {
    console.log("you are a kid");
} 
else {
    console.log("You can't go for vote");
}

// ***** Ternery Operator *****
// let variableName = condition? expressionIfTrue : expressionIfFlse;

let age = 20;
let message;

message = (age<18) ? "you cannot drive":"you can drive";
console.log(message);

const date = 26;
const beverage = (date<=18) ? "Juice":"Beer";
console.log(beverage);

// ***** Switch Case *****
let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "sunday";
        break;
    case 2:
        dayName = "Monday";
        break;
    case 3:
        dayName = "Tuesday";
        break;
    case 4:
        dayName = "Wednesday";
        break;
    case 5:
        dayName = "Thursday";
        break;
    case 6:
        dayName = "Friday";
        break;
    case 7:
        dayName = "Saturday";
        break;
    default:
        dayName = "Invalid Day"
        break;
}
console.log(dayName);

// ***** While loop *****
let n = 1;
while (n<10) {
     console.log(n);
     n++;    
}