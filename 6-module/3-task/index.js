import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = this.createCarousel(slides);
  }

  createCarousel(slides) {
    let slide = createElement(`
    <div class="carousel">
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
      <div class="carousel__inner">
        ${slides.map(this.createSlide).join('')}
      </div>
    </div>
    `);

    let carouselSlides = slide.querySelectorAll(".carousel__slide");
    let carouselInner = slide.querySelector(".carousel__inner");
    let carouselLeftButton = slide.querySelector(".carousel__arrow_left");
    let carouselRightButton = slide.querySelector(".carousel__arrow_right");
    let carouselAddProductButtons = slide.querySelectorAll(".carousel__button");

    let counter = 0;

    if (counter <= 0) {
      carouselLeftButton.style.display = "none";
    }

    carouselRightButton.addEventListener("click", () => {
      counter++;
      carouselInner.style.transform = `translateX(-${this.elem.offsetWidth * counter}px)`;
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
      carouselInner.style.transform = `translateX(-${this.elem.offsetWidth * counter}px)`;
      if (counter <= 0) {
        carouselLeftButton.style.display = "none";
        carouselRightButton.style.display = "";
      }
    });

    carouselAddProductButtons.forEach(button => {
      button.addEventListener('click', (event) => {

        const myEvent = new CustomEvent("product-add", {
          detail: event.target.closest("div.carousel__slide").dataset.id,
          bubbles: true
        });
        this.elem.dispatchEvent(myEvent);
      });
    });

    return slide;
  }

  createSlide(slide) {
    return `
      <div class="carousel__slide" data-id="${slide.id}">
        <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${slide.price.toFixed(2)}</span>
          <div class="carousel__title">${slide.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>`
  }
}