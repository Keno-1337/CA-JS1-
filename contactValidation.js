const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const subjectInput = document.getElementById("subject");
const emailInput = document.getElementById("email");
const addressInput = document.getElementById("address");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  validateForm();
});

function validateForm() {
  const nameValue = nameInput.value.trim();
  const subjectValue = subjectInput.value.trim();
  const emailValue = emailInput.value.trim();
  const addressValue = addressInput.value.trim();

  if (nameValue === "") {
    displayError("name", "Name is required.");
  } else {
    hideError("name");
  }

  if (subjectValue.length < 10) {
    displayError("subject", "Subject must have a minimum length of 10 characters.");
  } else {
    hideError("subject");
  }

  if (!isValidEmail(emailValue)) {
    displayError("email", "Email must be formatted like an email address.");
  } else {
    hideError("email");
  }

  if (addressValue.length < 25) {
    displayError("address", "Address must have a minimum length of 25 characters.");
  } else {
    hideError("address");
  }


function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function displayError(inputName, message) {
  const inputElement = document.getElementById(inputName);
  const errorElement = document.getElementById(`${inputName}-error`);
  inputElement.classList.add("invalid");
  errorElement.textContent = message;
}

function hideError(inputName) {
  const inputElement = document.getElementById(inputName);
  const errorElement = document.getElementById(`${inputName}-error`);
  inputElement.classList.remove("invalid");
  errorElement.textContent = "";
}
