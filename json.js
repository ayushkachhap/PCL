// Console log to confirm the script is loaded
console.log("Login and Sign Up scripts loaded");

// Function to handle login
function handleLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const alertBox = document.getElementById("alert");

  // Get stored user credentials
  const storedUser = localStorage.getItem(username);
  const storedPassword = storedUser ? JSON.parse(storedUser).password : '';

  // Simple validation
  if (password === storedPassword) {
    window.location.href = "dashboard.html"; // Redirect to the dashboard page
  } else {
    alertBox.classList.remove("alert-success");
    alertBox.classList.add("alert-danger");
    alertBox.innerText = "Invalid username or password!";
    alertBox.style.display = "block";
  }
}

// Function to handle sign-up
function handleSignUp() {
  const email = document.getElementById("email").value;
  const newUsername = document.getElementById("newUsername").value;
  const newPassword = document.getElementById("newPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const signupAlert = document.getElementById("signupAlert");

  // Check if passwords match
  if (newPassword === confirmPassword) {
    // Store user credentials
    localStorage.setItem(newUsername, JSON.stringify({
      email: email,
      password: newPassword
    }));
    console.log("Sign Up successful for:", newUsername);

    // Automatically log in after sign up
    window.location.href = "index.html"; // Redirect to login page
  } else {
    signupAlert.classList.remove("alert-success");
    signupAlert.classList.add("alert-danger");
    signupAlert.innerText = "Passwords do not match!";
    signupAlert.style.display = "block";
  }
}

// Add event listener for login form submission
document.getElementById("loginForm")?.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  handleLogin();
});

// Add event listener for sign-up form submission
document.getElementById("signupForm")?.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  handleSignUp();
});
