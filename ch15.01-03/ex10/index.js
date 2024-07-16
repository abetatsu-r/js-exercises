const elemDiv = document.querySelector("#editor-front");
const elemInput = document.querySelector("#editor-back");

elemDiv.style.backgroundColor = "rgb(255, 255, 255)";

elemDiv.addEventListener("click", () => {
  elemInput.focus();
});

elemInput.addEventListener("focus", () => {
  elemDiv.style.backgroundColor = "rgb(192, 192, 192)";
});

elemInput.addEventListener("blur", () => {
  elemDiv.style.backgroundColor = "rgb(255, 255, 255)";
});

elemInput.addEventListener("input", () => {
  const value = elemInput.value;
  elemDiv.textContent = value;
});
