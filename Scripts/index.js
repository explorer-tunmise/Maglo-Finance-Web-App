"use strict"

// Create a user object

let users = [
  {
    name: "adewole tunmise",
    username: "lordEben",
    email: "adewoletunmise2000@gmail.com",
    password: "152102020"
  },

  {
    name: "john doe",
    username: "johnDoe",
    email: "johndoe@gmail.com",
    password: "12345678"
  },

  {
    name: "jane smith",
    username: "janeSmith",
    email: "janesmith@yahoo.com",
    password: "password123"
  }
];



// Get the form element
const form = document.getElementById("login-Form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const signIn = document.getElementById("signin-button");
const overlay = document.getElementById("overlay");
const errorMessage = document.getElementById("error-message");


signIn.addEventListener("click", function (event) {
    event.preventDefault();

    let emailValue = email.value
    let passwordValue = password.value


    if(!emailValue && !passwordValue){
        email.classList.add("outline-1", "outline-red-500");
        password.classList.add("outline-1", "outline-red-500");
        overlay.classList.remove("hidden")
        errorMessage.classList.remove("hidden")
        console.log("Email and password are required");
    } else if (!passwordValue) {
        password.classList.add("outline-1", "outline-red-500");
        console.log("Password is required");
    } else if (!emailValue) {
        email.classList.add("outline-1", "outline-red-500");
        console.log("Email is required");
    }
    // users.forEach((user) => {

    // })
});
