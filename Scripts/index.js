// Create an array of user objects
let users = [
  {
    name: "adewole tunmise",
    username: "lordEben",
    email: "adewoletunmise2000@gmail.com",
    password: "152102020",
  },

  {
    name: "john doe",
    username: "johnDoe",
    email: "johndoe@gmail.com",
    password: "12345678",
  },

  {
    name: "jane smith",
    username: "janeSmith",
    email: "janesmith@yahoo.com",
    password: "password123",
  },
];

// Get the form element
const form = document.getElementById("login-form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const signIn = document.getElementById("signin-button");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");

function login() {
  if (
    email.value === "" ||
    !email.value.includes("@") ||
    !email.value.includes(".com")
  ) {
    emailError.textContent = "Please enter a valid email address.";
    emailError.classList.remove("hidden");
  } else {
    emailError.classList.add("hidden");
  }

  if (password.value === "" || password.value.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters long.";
    passwordError.classList.remove("hidden");
  } else {
    passwordError.classList.add("hidden");
  }

  let user = users.find(
    (user) => user.email === email.value && user.password === password.value,
  );
  if (user) {
    alert("Login successful! Welcome, " + user.name + "!");
    // Redirect to the dashboard or home page
    window.location.href = "Dashboard.html";
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission behavior
  login(); // Call the login function to handle the login logic
});
