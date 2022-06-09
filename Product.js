class Product {
  constructor(name, color, size) {
    this.name = name;
    this.color = color;
    this.size = size;
  }

  filterByColor(products, color) {
    return products.filter((p) => p.color === color);
  }

  filterBySize(products, size) {
    return products.filter((p) => p.size === size);
  }

  filterByColorAndSize(products, color, size) {
    return products.filter((p) => p.color === color && p.size === size);
  }
}

export default Product;
