import HotDrinkFactory from './HotDrinkFactory.js';

test("HotDrinkFactory is a function", () => {
    expect(typeof HotDrinkFactory).toBe("function");
});

test("HotDrinkFactory can be instantiated", () => {
    const hf = new HotDrinkFactory();
    expect(hf instanceof HotDrinkFactory).toBe(true);
});
