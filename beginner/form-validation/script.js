const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const usernameVal = username.value.trim();
  const emailVal = email.value.trim();
  const passwordVal = password.value.trim();
  const password2Val = password2.value.trim();

  if (usernameVal === "") {
    setError(username, "Name is required");
  } else if (usernameVal.length < 3) {
    setError(username, "Name must be 3 character long.");
  } else {
    setSuccess(email);
  }

  if (emailVal === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(email)) {
    setError(email, "Email is not valid");
  } else {
    setSuccess(email);
  }

  if (passwordVal.length < 6) {
    setError(password, "Password must be atleast 6 character long.");
  } else {
    setSuccess(password);
  }

  if (password2Val !== passwordVal) {
    setError(password2, "password do not match");
  } else {
    setSuccess(password2);
  }
}

function setError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function setSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isValidEmail(email) {
  return /^\S+@\S+\.\S+$/.test(email);
}
