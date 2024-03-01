const slider = document.querySelector("#font-size-control");
const displayedText = document.querySelector("#text");

displayedText.style.fontSize = slider.value + "px";

slider.addEventListener("input", () => {
  displayedText.style.fontSize = slider.value + "px";
});
