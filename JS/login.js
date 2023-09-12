// const users = [
//   {
//     email: "admin@gmail.com",
//     name: "admin",
//     password: "12345",

//     role: "admin",
//     phoneNumber: "03440177289",
//     education: [
//       "Master's in Business Administration",
//       "Education of the University",
//     ],
//     skills: ["Leadership", "Management"],
//     experience: "5 years",
//   },
//   {
//     name: "zeeshan",
//     email: "zeeshan@gmail.com",
//     password: "12345",
//     role: "user",
//     phoneNumber: "03440177289",
//     education: [
//       "Master's in Business Administration",
//       "Education of the University",
//     ],
//     skills: ["Leadership", "Management"],
//     experience: "5 years",
//   },
//   {
//     name: "shani",
//     email: "shani@gmail.com",
//     password: "12345",
//     role: "user",
//     phoneNumber: "03440177289",
//     education: [
//       "Master's in Business Administration",
//       "Education of the University",
//     ],
//     skills: ["Leadership", "Management"],
//     experience: "5 years",
//   },
// ];

// functions
var users = JSON.parse(localStorage.getItem("users")) || [];

function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById("loginemail").value;
  const password = document.getElementById("loginpassword").value;
  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    if (user.role === "admin") {
      alert(" ADMIN LOGIN SUCCESSFUL");
      localStorage.setItem("admin", JSON.stringify(user));
      console.log(user);

      const url = "http://127.0.0.1:5500/HTML/adminUsers.html";
      window.location.href = url;
    } else {
      alert("USER LOGIN SUCCESSFUL");
      console.log(user);
      localStorage.setItem("user", JSON.stringify(user));
      const url = "http://127.0.0.1:5500/HTML/index.html";
      window.location.href = url;
    }
  } else {
    alert("invalid email or password");
  }
}

const loginForm = document.getElementById("login");
loginForm.addEventListener("submit", handleLogin);
