let person = {
    firstName : "Rohit",
    lastName : "Sonawane",
    sayHello () {
        console.log("Hello..! I am "+this.firstName+" And I have a "+car.Brand+" car");
    }
};

let car = {
    Brand : "Tata",
    Model : "Nexon"
}

person.sayHello();