class MemoryContainer {
  constructor() {
    this.arrayProducts = [];
  }

  getAll() {
    return this.arrayProducts;
  }

  getById(id) {
    const product = this.arrayProducts.find((p) => p.id == id);
    return product;
  }

  saveProduct(product) {
    product.id = this.newId();
    this.arrayProducts.push(product);

    return product;
  }

  updateProduct(product, id) {
    const index = this.arrayProducts.findIndex((p) => p.id == id);

    if (index === -1) return { error: true };

    this.arrayProducts[index] = {
      ...this.arrayProducts[index],
      ...product,
    };

    return this.arrayProducts[index];
  }

  deleteById(id) {
    const index = this.arrayProducts.findIndex((p) => p.id == id);

    if (index === -1) return { error: true };

    this.arrayProducts = this.arrayProducts.filter((p) => p.id != id);

    return { error: false };
  }

  existsProduct(id) {
    let product = this.arrayProducts.find((p) => p.id == id);
    if (product != undefined) {
      return { error: true };
    } else {
      return { error: false };
    }
  }

  validateProduct(product) {
    if (
      product.title != null &&
      product.price != null &&
      product.thumbnail != null
    ) {
      return { error: true };
    } else {
      return { error: false };
    }
  }

  //#region private
  newId() {
    let id = 1;
    if (this.arrayProducts.length > 0) {
      id = this.arrayProducts[this.arrayProducts.length - 1].id + 1;
    }

    return id;
  }
  //#endregion
}

export { MemoryContainer };
