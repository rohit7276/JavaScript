let person = {
    firstName : "Rohit",
    lastName : "Sonawane",
     // 3. crate function in object using annonymous function
    sayHello3 : function () {
        console.log("hello...!");
    },
    // 4. Direct creating function
    sayHello4(){
        console.log("Hello ...!");
    }
};

person.sayHello3();
person.sayHello4();

// Crating methods for object

// 1. Using annonymous function
person.sayHello1 = function(){
    console.log("hello...!");
}

person.sayHello1(); //function calling

// 2. Using normal function
function greet(){
    console.log("hello...!");
}

person.sayHello2 = greet();