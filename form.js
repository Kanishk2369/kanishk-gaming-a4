// welcome message

function welcomeMessage() {

alert(
"Welcome to the Kanishk Gaming Corporation - Newsletter Signup"
);

}



// form validation

function validateForm() {

let first =
document.getElementById("fname").value;

let last =
document.getElementById("lname").value;


if (
first === ""
||
last === ""
) {

alert(
"First Name and Last Name cannot be empty"
);

return false;

}


alert(
"Form submitted successfully");

return true;

}