const nameInput = document.querySelector("#name-input");
let nameOutput = document.querySelector("#name-output");

const displayName = () => {
  if (nameInput.value === "") {
    nameOutput.textContent = "Anonymous";
    return nameOutput;
  }
  nameOutput.textContent = nameInput.value;
};

nameInput.addEventListener("input", displayName);
