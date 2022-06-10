import CoffeeFactory from './CoffeeFactory.js';
import Coffee from "./Coffee.js";

test("CoffeeFactory is a function", () => {
    expect(typeof CoffeeFactory).toBe("function");
});

test("CoffeeFactory can be instantiated", () => {
    const cf = new CoffeeFactory();
    expect(cf instanceof CoffeeFactory).toBe(true);
});
