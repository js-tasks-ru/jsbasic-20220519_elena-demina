function toggleText() {
  let buttonToggle = document.querySelector(".toggle-text-button");

  buttonToggle.addEventListener("click", () => {
    let text = document.querySelector("#text");
    text.toggleAttribute("hidden");
  });
}
