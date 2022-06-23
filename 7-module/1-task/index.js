import createElement from "../../assets/lib/create-element.js";

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem = this.createMenu(categories);
  }

  createMenu(categories) {
    let menu = createElement(`

          <div class="ribbon">
            <div class="ribbon__arrow ribbon__arrow_left">
              <img src="/assets/images/icons/angle-icon.svg" alt="icon">
            </div>
            <nav class="ribbon__inner">
              ${categories.map(this.createCategorie).join("")}
            </nav>
            <div class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
              <img src="/assets/images/icons/angle-icon.svg" alt="icon">
            </div>
          </div>

    `);

    let scrollRightArrow = menu.querySelector(".ribbon__arrow_right");
    let scrollLeftArrow = menu.querySelector(".ribbon__arrow_left");
    let ribbonInner = menu.querySelector(".ribbon__inner");

    scrollRightArrow.onclick = () => {
      ribbonInner.scrollBy(350, 0);
    };

    scrollLeftArrow.onclick = () => {
      ribbonInner.scrollBy(-350, 0);
    };

    ribbonInner.addEventListener("scroll", function () {
      let scrollLeft = ribbonInner.scrollLeft;
      let scrollWidth = ribbonInner.scrollWidth;
      let clientWidth = ribbonInner.clientWidth;
      let scrollRight = scrollWidth - scrollLeft - clientWidth;

      if (scrollLeft == 0) {
        scrollLeftArrow.classList.remove("ribbon__arrow_visible");
      } else {
        scrollLeftArrow.classList.add("ribbon__arrow_visible");
      }

      if (scrollRight < 1) {
        scrollRightArrow.classList.remove("ribbon__arrow_visible");
      } else {
        scrollRightArrow.classList.add("ribbon__arrow_visible");
      }

      // l = (scrollRight == 0) ? scrollRightArrow.classList.remove("ribbon__arrow_visible") : scrollRightArrow.classList.add("ribbon__arrow_visible");
    });

    let listCategories = menu.querySelectorAll(".ribbon__item");
    listCategories.forEach((element) => {
      element.addEventListener("click", function (event) {
        event.preventDefault();

        listCategories.forEach((element) =>
          element.classList.remove("ribbon__item_active")
        );

        event.target.classList.add("ribbon__item_active");

        const myEvent = new CustomEvent("ribbon-select", {
          detail: event.target.closest("a.ribbon__item").dataset.id,
          bubbles: true,
        });
        menu.dispatchEvent(myEvent);
      });
    });
    return menu;
  }

  createCategorie(category) {
    return `
      <a href="#" class="ribbon__item" data-id="${category.id}">${category.name}</a>`;
  }
}
