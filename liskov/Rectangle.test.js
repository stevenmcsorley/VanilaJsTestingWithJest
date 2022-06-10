import Rectangle from "./Rectangle";

test("Rectangle is a function", () => {
  expect(typeof Rectangle).toBe("function");
});

test("Rectangle can be instantiated", () => {
  const r = new Rectangle();
  expect(r instanceof Rectangle).toBe(true);
});

test("Rectangle returns the area of a rectangle", () => {
  const r = new Rectangle(5, 10);
  expect(r.area()).toBe(50);
});

test("Rectangle return a square", () => {
  const r = new Rectangle(5, 5);
  expect(r.area()).toBe(25);
});

test("Square is not a rectangle", () => {
  const r = new Rectangle(5, 5);
  expect(r.isSquare()).toBe(true);
});

test("Rectangle is not a square", () => {
  const r = new Rectangle(5, 10);
  expect(r.isSquare()).toBe(false);
});
