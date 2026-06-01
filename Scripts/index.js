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

function login() {
  users.find((user) => {
    if (
      email.value === "" ||
      !email.value.includes("@") ||
      !email.value.includes(".com")
    ) {
      alert("Please enter a valid email address.");
    }

    if (password.value === "" || password.value.length < 8) {
      alert(
        "Please enter a valid password. Password must be at least 8 characters long.",
      );
    }

    if (email.value === user.email && password.value === user.password) {
      alert("Login successful! Welcome, " + user.name + "!");
      // Redirect to the dashboard or home page
      window.location.href = "Dashboard.html";
    } else {
      alert("Invalid email or password. Please try again.");
    }
  });
}
