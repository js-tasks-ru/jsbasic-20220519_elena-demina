function initCarousel() {
  //carousel
  let carouselInner = document.querySelector(".carousel__inner");
  let carouselSlides = document.querySelectorAll(".carousel__slide");

  //buttons
  let carouselLeftButton = document.querySelector(".carousel__arrow_left");
  let carouselRightButton = document.querySelector(".carousel__arrow_right");

  //counter
  let counter = 0;
  let sizeStep = carouselSlides[0].offsetWidth;
  if (counter <= 0) {
    carouselLeftButton.style.display = "none";
  }

  carouselRightButton.addEventListener("click", () => {
    counter++;
    carouselInner.style.transform = `translateX(-${sizeStep * counter}px)`;
    if (counter >= carouselSlides.length - 1) {
      carouselRightButton.style.display = "none";
      carouselLeftButton.style.display = "block";
    }
    if (counter > 0) {
      carouselLeftButton.style.display = "block";
    }
  });

  carouselLeftButton.addEventListener("click", () => {
    counter--;
    carouselInner.style.transform = `translateX(-${sizeStep * counter}px)`;
    if (counter <= 0) {
      carouselLeftButton.style.display = "none";
      carouselRightButton.style.display = "";
    }
  });
}
