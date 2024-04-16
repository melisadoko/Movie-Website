var signUpButton = document.getElementById("signUp");
var signInButton = document.getElementById("signIn");
var email = document.getElementById("email");
var password = document.getElementById("password");

signUpButton.addEventListener("click", function () {
  window.location.href = "../views/signUp.html";
});

var storedEmail = localStorage.getItem("email");
var storedPassword = localStorage.getItem("password");
if (storedEmail && storedPassword) {
  email.value = storedEmail;
  password.value = storedPassword;
  window.location.href = "../views/home.html";
}

signInButton.addEventListener("click", function (event) {
  event.preventDefault();

  var emailInput = email.value;
  var passwordInput = password.value;

  // nese direkt klikohet logohu
  if (emailInput === "" || passwordInput === "") {
    alert("Ju lutem plotësoni email dhe fjalëkalimin");
    return;
  }

  // nese email dhe password jane keto qe kemi deklaruar
  if (emailInput === "admin@hotmail.com" && passwordInput === "admin") {
    localStorage.setItem("email", emailInput);
    localStorage.setItem("password", passwordInput);
    window.location.href = "../views/home.html";
  } else {
    // nese nuk jane te sakta
    alert("Email dhe fjalëkalimi nuk janë të sakta.");
  }
});
