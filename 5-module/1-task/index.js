function hideSelf() {
  let button = document.querySelector(".hide-self-button");

  button.addEventListener("click", () => {
    document.querySelector(".hide-self-button").hidden = true;
  });
}
