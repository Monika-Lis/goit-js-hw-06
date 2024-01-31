const slider = document.querySelector("#font-size-control");
const displayedText = document.querySelector("#text");

slider.addEventListener("input", () => {
  displayedText.style.fontSize = slider.value + "px";
});
