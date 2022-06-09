import { binarySubtraction } from "./index.js";
import Product from "./product.js";

// OCP - Open/Closed Principle
import BetterFilter from "./ocp/BetterFilter.js";
import ColorSpecification from "./ocp/ColorSpecification.js";
import SizeSpecification from "./ocp/SizeSpecification.js";
import AndSpecification from "./ocp/AndSpecification.js";
import OrSpecification from "./ocp/OrSpecification.js";

beforeEach(() => {
  jest.resetAllMocks();
});

test("binary subtract function is defined", () => {
  expect(binarySubtraction).toBeDefined();
});

test("binary subtract function returns a string", () => {
  expect(typeof binarySubtraction).toBe("string");
});

test("binary subtract function returns a string of 1s and 0s", () => {
  expect(binarySubtraction).toMatch(/^[01]+$/);
});

test("BetterFilter is defined", () => {
  expect(BetterFilter).toBeDefined();
});

test("BetterFilter is a class", () => {
  expect(typeof BetterFilter).toBe("function");
});

test("BetterFilter can filter by color", () => {
  let Color = Object.freeze({
    red: Symbol("red"),
    green: Symbol("green"),
    blue: Symbol("blue"),
  });

  let Size = Object.freeze({
    small: Symbol("small"),
    medium: Symbol("medium"),
    large: Symbol("large"),
  });

  let bf = new BetterFilter();
  let products = [
    new Product("Apple", Color.green, Size.small),
    new Product("Tree", Color.red, Size.large),
    new Product("House", Color.green, Size.large),
  ];
  let green = bf.filter(products, new ColorSpecification(Color.green));
  expect(green.length).toBe(2);
});

test("BetterFilter can filter by color and size", () => {
  let Color = Object.freeze({
    red: Symbol("red"),
    green: Symbol("green"),
    blue: Symbol("blue"),
  });

  let Size = Object.freeze({
    small: Symbol("small"),
    medium: Symbol("medium"),
    large: Symbol("large"),
  });

  let bf = new BetterFilter();
  let products = [
    new Product("Apple", Color.green, Size.small),
    new Product("Tree", Color.red, Size.large),
    new Product("House", Color.green, Size.large),
  ];
  let green = bf.filter(
    products,
    new AndSpecification(
      new ColorSpecification(Color.green),
      new SizeSpecification(Size.large)
    )
  );
  expect(green.length).toBe(1);
});

test("AndSpecification is defined", () => {
  expect(AndSpecification).toBeDefined();
});

test("AndSpecification is a class", () => {
  expect(typeof AndSpecification).toBe("function");
});

test("AndSpecification can filter by color and size", () => {
  let Color = Object.freeze({
    red: Symbol("red"),
    green: Symbol("green"),
    blue: Symbol("blue"),
  });

  let Size = Object.freeze({
    small: Symbol("small"),
    medium: Symbol("medium"),
    large: Symbol("large"),
  });

  let bf = new BetterFilter();
  let products = [
    new Product("Apple", Color.green, Size.small),
    new Product("Tree", Color.red, Size.large),
    new Product("House", Color.green, Size.large),
  ];
  let green = bf.filter(
    products,
    new AndSpecification(
      new ColorSpecification(Color.green),
      new SizeSpecification(Size.large)
    )
  );
  expect(green.length).toBe(1);
});

test("ColorSpecification is defined", () => {
  expect(ColorSpecification).toBeDefined();
});

test("ColorSpecification is a class", () => {
  expect(typeof ColorSpecification).toBe("function");
});
test("ColorSpecification can filter by color", () => {
  let Color = Object.freeze({
    red: Symbol("red"),
    green: Symbol("green"),
    blue: Symbol("blue"),
  });

  let Size = Object.freeze({
    small: Symbol("small"),
    medium: Symbol("medium"),
    large: Symbol("large"),
  });

  let bf = new BetterFilter();
  let products = [
    new Product("Apple", Color.green, Size.small),
    new Product("Tree", Color.red, Size.large),
    new Product("House", Color.green, Size.large),
  ];
  let green = bf.filter(products, new ColorSpecification(Color.green));
  expect(green.length).toBe(2);
});

test("SizeSpecification is defined", () => {
  expect(SizeSpecification).toBeDefined();
});

test("SizeSpecification is a class", () => {
  expect(typeof SizeSpecification).toBe("function");
});
test("SizeSpecification can filter by size", () => {
  let Color = Object.freeze({
    red: Symbol("red"),
    green: Symbol("green"),
    blue: Symbol("blue"),
  });

  let Size = Object.freeze({
    small: Symbol("small"),
    medium: Symbol("medium"),
    large: Symbol("large"),
  });

  let bf = new BetterFilter();
  let products = [
    new Product("Apple", Color.green, Size.small),
    new Product("Tree", Color.red, Size.large),
    new Product("House", Color.green, Size.large),
  ];
  let large = bf.filter(products, new SizeSpecification(Size.large));
  expect(large.length).toBe(2);
});

test("OrSpecification is defined", () => {
  expect(OrSpecification).toBeDefined();
});

test("OrSpecification is a class", () => {
    expect(typeof OrSpecification).toBe("function");
    });
test("OrSpecification can filter by color or size", () => {
    let Color = Object.freeze({
        red: Symbol("red"),
        green: Symbol("green"),
        blue: Symbol("blue"),
    });
    
    let Size = Object.freeze({
        small: Symbol("small"),
        medium: Symbol("medium"),
        large: Symbol("large"),
    });
    
    let bf = new BetterFilter();
    let products = [
        new Product("Apple", Color.green, Size.small),
        new Product("Tree", Color.red, Size.large),
        new Product("House", Color.green, Size.large),
    ];
    let green = bf.filter(
        products,
        new OrSpecification(
        new ColorSpecification(Color.green),
        new SizeSpecification(Size.large)
        )
    );
    expect(green.length).toBe(3);
    });

    // test("NotSpecification is defined", () => {
    //     expect(NotSpecification).toBeDefined();
    // })
