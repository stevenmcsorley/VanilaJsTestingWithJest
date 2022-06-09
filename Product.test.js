import Product from "./product";

test("Product is defined", () => {
  expect(Product).toBeDefined();
});

test("Product is a function", () => {
  expect(typeof Product).toBe("function");
});

test("Product can be instantiated", () => {
  const p = new Product();
  expect(p instanceof Product).toBe(true);
});

test("Product can be instantiated with a name", () => {
  const p = new Product("name");
  expect(p.name).toBe("name");
});

test("Product can be instantiated with a color", () => {
  const p = new Product("name", "color");
  expect(p.color).toBe("color");
});

test("Product can be instantiated with a size", () => {
  const p = new Product("name", "color", "size");
  expect(p.size).toBe("size");
});

test("Product can filter by color", () => {
  const p = new Product("name", "color", "size");
  const products = [
    new Product("name", "red", "size"),
    new Product("name", "blue", "size"),
    new Product("name", "green", "size"),
  ];
  expect(p.filterByColor(products, "red")).toEqual([
    new Product("name", "red", "size"),
  ]);
});

test("Product can filter by size", () => {
  const p = new Product("name", "color", "size");
  const products = [
    new Product("name", "red", "small"),
    new Product("name", "blue", "medium"),
    new Product("name", "green", "large"),
  ];
  expect(p.filterBySize(products, "medium")).toEqual([
    new Product("name", "blue", "medium"),
  ]);
});

test("Product can filter by color and size", () => {
  const p = new Product("name", "color", "size");
  const products = [
    new Product("name", "red", "small"),
    new Product("name", "blue", "medium"),
    new Product("name", "green", "large"),
  ];
  expect(p.filterByColorAndSize(products, "blue", "medium")).toEqual([
    new Product("name", "blue", "medium"),
  ]);
});

