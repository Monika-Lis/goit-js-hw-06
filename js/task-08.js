const loginForm = document.querySelector(".login-form");
const userEmail = document.querySelector("input[type=email]");
const userPassword = document.querySelector("input[type=password]");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (userEmail.value.trim() !== "" && userPassword.value.trim() !== "") {
    const formData = {};
    const formElements = loginForm.elements;
    for (let element of formElements) {
      if (element.name) {
        formData[element.name] = element.value;
      }
    }
    console.log(formData);
    loginForm.reset();
  } else {
    alert("All fields need to be filled");
  }
});
