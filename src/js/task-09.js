function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const websiteBody = document.querySelector("body");
const button = document.querySelector("button");
const colorName = document.querySelector(".color");

button.addEventListener("click", () => {
  websiteBody.style.backgroundColor = getRandomHexColor();
  colorName.textContent = websiteBody.style.backgroundColor;
});
