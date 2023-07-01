// 1.Local variable - The variable which is declared inside the function, such variable are called as local variable. Local variable cannot be used outside of function.

// 2.Global variable - The variable which is declared outside of function such variable are called as global variable. Global variable can be used inside and outside of function.

let car = "Audi"; //Global Variable

function add() {
    let result = 33; //Local Variable
    console.log(result);
    console.log(car); // we can use global variable inside function
}

//console.log(result); we cannot use local variable outside of function.
add();
console.log(car);// we can use global variable outside function


function sub() {
    let result = 33; //Local Variable - we can use same local variable again
    console.log(result);
    
}

sub();