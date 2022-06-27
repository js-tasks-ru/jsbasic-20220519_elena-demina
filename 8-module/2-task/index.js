import createElement from "../../assets/lib/create-element.js";
import ProductCard from "../../6-module/2-task/index.js";

export default class ProductGrid {
  constructor(products) {
    this.products = products;
    this.cards = this.products.map((product) => new ProductCard(product));
    this.filters = {
      noNuts: false,
      vegeterianOnly: false,
      maxSpiciness: 4,
      category: "",
    };
    this.elem = this.createList();
  }

  createList() {
    let productList = createElement(`
      <div class="products-grid">
        <div class="products-grid__inner"></div>
      </div>`);

    let productInner = productList.querySelector(".products-grid__inner");
    this.cards.forEach((card) => {
      productInner.append(card.elem);
    });

    return productList;
  }

  updateFilter(filters) {
    this.filters = Object.assign(this.filters, filters);

    const filterCards = this.products
      .filter((product) => {
        let visibleProduct = product.spiciness <= this.filters.maxSpiciness;
        if (visibleProduct && this.filters.noNuts) {
          visibleProduct = !product.nuts;
        }
        if (visibleProduct && this.filters.vegeterianOnly) {
          visibleProduct = product.vegeterian;
        }
        if (visibleProduct && this.filters.category) {
          visibleProduct = product.category === this.filters.category;
        }

        return visibleProduct;
      })
      .map((product) => new ProductCard(product));

    let productInner = this.elem.querySelector(".products-grid__inner");
    productInner.innerHTML = "";

    filterCards.forEach((card) => {
      productInner.append(card.elem);
    });
  }
}
