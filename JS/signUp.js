// const users = [
//   {
//     name: "Admin",
//     email: "admin@gmail.com",
//     password: "12345",
//     role: "admin",
//     phoneNumber: "",
//     education: [],
//     skills: [],
//     experience: "",
//   },
//   {
//     name: "zeeshan",
//     email: "zeeshan@gmail.com",
//     password: "12345",
//     role: "user",
//     phoneNumber: "",
//     education: [],
//     skills: [],
//     experience: "",
//   },
//   {
//     name: "shani",
//     email: "shani@gmail.com",
//     password: "12345",
//     role: "user",
//     phoneNumber: "",
//     education: [],
//     skills: [],
//     experience: "",
//   },
// ];

// localStorage.setItem("users", JSON.stringify(users));
var users = JSON.parse(localStorage.getItem("users")) || [];

function handleSignup(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const user = {
    name,
    email,
    password,
    role: "user",
  };
  if (name.trim() == "" || email.trim() == "" || password.trim() == "") {
    alert("name,email,password is required");
    return;
  }
  const userss = users.find((user) => user.email === email);
  if (userss) {
    alert("this email already exist");
    return;
  }
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  alert("Signup successful");
  //input fields empty k liyeh
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  console.log(users);
  const url = "http://127.0.0.1:5500/HTML/login.html";
  window.location.href = url;
}

const signupForm = document.getElementById("signupform");
signupForm.addEventListener("submit", handleSignup);
