import HotDrink from "./HotDrink";

test("HotDrink is a function", () => {
    expect(typeof HotDrink).toBe("function");
});

test("HotDrink can be instantiated", () => {
    const h = new HotDrink();
    expect(h instanceof HotDrink).toBe(true);
});

test("HotDrink consume cant be called directly", () => {
    const h = new HotDrink();
    expect(() => {
        h.consume();
    }).toThrow(Error);
});
