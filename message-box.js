// >>> The alert() function displays a message to the user.<<<
// alert("Welcome...!")

// >>> Use the prompt() function to take the user's input to do further actions.<<<
// let age = prompt("Enter Your Age")

// if (age>18) {
//     document.write("Welcome dear...!")
// }else{
//     document.write("You are under age")
// }

// >>> Use the confirm() function to take the user's confirmation before starting some task. For example, you want to take the user's confirmation before saving, updating or deleting data.<<<

let response = confirm("Are you sure to delete?")

if (response) {
    document.write("Deleted")
} else {
    document.write("Not Deleted")
}