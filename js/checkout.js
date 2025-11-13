// Exercise 6
// magic filters
const lettersOnly = /^[A-Za-z\s]+$/;
const numbersOnly = /^\d+$/;
const emailFormat = /^\S+@\S+\.\S+$/;
const passwordFormat = /(?=.*\d)(?=.*[a-zA-Z])/;

const validate = () => {
  const resetValidation = () => {
    fName.classList.remove("is-invalid");
    errorName.innerText = "";
    fLastN.classList.remove("is-invalid");
    errorLastN.innerText = "";
    fEmail.classList.remove("is-invalid");
    errorEmail.innerText = "";
    fAddress.classList.remove("is-invalid");
    errorAddress.innerText = "";
    fPassword.classList.remove("is-invalid");
    errorPassword.innerText = "";
    fPhone.classList.remove("is-invalid");
    errorPhone.innerText = "";
  };

  let error = 0;
  // Get the input fields
  const fName = document.getElementById("fName");
  const fLastN = document.getElementById("fLastN");
  const fEmail = document.getElementById("fEmail");
  const fAddress = document.getElementById("fAddress");
  const fPassword = document.getElementById("fPassword");
  const fPhone = document.getElementById("fPhone");

  // Get the error elements
  const errorName = document.getElementById("errorName");
  const errorLastN = document.getElementById("errorLastN");
  const errorEmail = document.getElementById("errorEmail");
  const errorAddress = document.getElementById("errorAddress");
  const errorPassword = document.getElementById("errorPassword");
  const errorPhone = document.getElementById("errorPhone");

  // Validate fields entered by the user: name, phone, password, and email
  resetValidation();

  if (fName.value.length < 3) {
    error++;
    fName.classList.add("is-invalid");
    errorName.innerText =
      "This field is required and must have, at least, 3 characters";
  } else if (!lettersOnly.test(fName.value)) {
    error++;
    fName.classList.add("is-invalid");
    errorName.innerHTML = "First Name must contain only letters";
  }

  if (fLastN.value.length < 3) {
    error++;
    fLastN.classList.add("is-invalid");
    errorLastN.innerText =
      "This field is required and must have, at least, 3 characters";
  } else if (!lettersOnly.test(fLastN.value)) {
    error++;
    fLastN.classList.add("is-invalid");
    errorLastN.innerText = "Last Name must contain only letters";
  }

  if (fEmail.value.length < 3) {
    error++;
    fEmail.classList.add("is-invalid");
    errorEmail.innerText =
      "This field is required and must have, at least, 3 characters";
  } else if (!emailFormat.test(fEmail.value)) {
    error++;
    fEmail.classList.add("is-invalid");
    errorEmail.innerHTML = "Please enter a valid email format";
  }

  if (fAddress.value.length < 3) {
    error++;
    fAddress.classList.add("is-invalid");
    errorAddress.innerHTML =
      "This field is required and must have, at least, 3 characters";
  }

  if (fPassword.value.length < 3) {
    error++;
    fPassword.classList.add("is-invalid");
    errorPassword.innerText =
      "This field is required and must have, at least, 3 characters";
  } else if (!passwordFormat.test(fPassword.value)) {
    error++;
    fPassword.classList.add("is-invalid");
    errorPassword.innerText = "Password must contain both letters and numbers";
  }

  if (fPhone.value.length < 3) {
    error++;
    fPhone.classList.add("is-invalid");
    errorPhone.innerText =
      "This field is required and must have, at least, 3 characters";
  } else if (!numbersOnly.test(fPhone.value)) {
    error++;
    fPhone.classList.add("is-invalid");
    errorPhone.innerText = "Phone must contain only numbers";
  }

  if (error > 0) {
    alert("Please fill in all required fields.");
  } else {
    alert("Form submitted successfully");
  }
};
