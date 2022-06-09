import subtract from "./subtract";
test("subtract 2 - 1 to equal 1", () => {
  expect(subtract(2, 1)).toBe(1);
});
test("subtract 2 - 1 to not equal 3", () => {
  expect(subtract(2, 1)).not.toBe(3);
});
