export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;
    this.elem = this.createSlider();
  }

  createElement(html) {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.firstElementChild;
  }

  createSlider() {
    let sliderContainer = this.createElement(`
      <div class="slider">
        <div class="slider__thumb" style="left: 50%;">
          <span class="slider__value">0</span>
        </div>
        <div class="slider__progress" style="width: 50%;"></div>
        <div class="slider__steps">
          ${this.createSteps()}
        </div>
      </div>
    `);

    let listSteps = sliderContainer.querySelectorAll(".slider__steps span");
    listSteps[this.value].classList.add("slider__step-active");

    let countProgress = () => {
      let thumb = sliderContainer.querySelector(".slider__thumb");
      let progress = sliderContainer.querySelector(".slider__progress");
      let leftPercents = (this.value / (this.steps - 1)) * 100;
      thumb.style.left = `${leftPercents}%`;
      progress.style.width = `${leftPercents}%`;
      return;
    };
    countProgress();

    sliderContainer.addEventListener("click", (event) => {
      event.preventDefault();

      let left = event.clientX - this.elem.getBoundingClientRect().left;
      let leftRelative = left / this.elem.offsetWidth;
      let segments = this.steps - 1;
      let approximateValue = leftRelative * segments;
      let value = Math.round(approximateValue);
      let valuePercents = (value / segments) * 100;

      this.value = value;

      listSteps.forEach((step) => step.classList.remove("slider__step-active"));
      listSteps[value].classList.add("slider__step-active");

      this.elem.querySelector(".slider__value").innerHTML = value;

      countProgress();

      const myEvent = new CustomEvent("slider-change", {
        detail: this.value,
        bubbles: true,
      });
      sliderContainer.dispatchEvent(myEvent);
    });

    return sliderContainer;
  }

  createSteps() {
    let result = "";
    for (let i = 0; i < this.steps; i++) {
      result += "<span></span>";
    }
    return result;
  }
}
