// ** Creating Object **
let person = {
    firstName : "Rohit",
    lastname : "Sonawane",
};

// ** Modifying object property
person.firstName = "Akash";

// ** Adding properties in object
person.age = 27;
person.city = "Pune";

// ** Deleting proprties of object
delete person.city;

// ** Accessing Object & its properties
console.log(person);
console.log(person.firstName);
console.log(person["age"]);

// ** How to check property mentioned in object or not (it returns true or false)
console.log("age" in person);
console.log("subject" in person);

// ** Using for loop accessing the object
for(let key in person){
    console.log(key +" : "+person[key]);
}
