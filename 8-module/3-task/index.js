export default class Cart {
  cartItems = []; // [{ product: {id: 1, ... }, count: 1 }, { product: {id: 2}, count: 2 }]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;
  }

  addProduct(product) {
    if (!product) {
      return;
    }

    let existingItem = this.cartItems.find((item) => {
      return item.product.id === product.id;
    });

    if (existingItem) {
      existingItem.count++;
    } else {
      existingItem = { product: product, count: 1 };
      this.cartItems.push(existingItem);
    }

    this.onProductUpdate(existingItem);
  }

  updateProductCount(productId, amount) {
    let existingItem = this.cartItems.find((item) => {
      return item.product.id === productId;
    });

    if (!existingItem) {
      return;
    }

    existingItem.count = existingItem.count + amount;

    if (existingItem.count === 0) {
      this.cartItems = this.cartItems.filter((item) => {
        return item.product.id !== existingItem.product.id;
      });
    }

    this.onProductUpdate(existingItem);
  }

  isEmpty() {
    return this.cartItems.length === 0;
  }

  getTotalCount() {
    return this.cartItems.reduce(
      (previousValue, currentValue) => previousValue + currentValue.count,
      0
    );
  }

  getTotalPrice() {
    return this.cartItems.reduce(
      (previousValue, currentValue) =>
        previousValue + currentValue.count * currentValue.product.price,
      0
    );
  }

  onProductUpdate(cartItem) {
    // реализуем в следующей задаче

    this.cartIcon.update(this);
  }
}
