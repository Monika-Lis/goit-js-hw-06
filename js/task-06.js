const inputValue = document.querySelector("#validation-input");

inputValue.addEventListener("blur", () => {
  const requiredLength = Number(inputValue.dataset.length);
  if (inputValue.value.length === requiredLength) {
    inputValue.classList.add("valid");
    inputValue.classList.remove("invalid");
  } else {
    inputValue.classList.add("invalid");
    inputValue.classList.remove("valid");
  }
});
