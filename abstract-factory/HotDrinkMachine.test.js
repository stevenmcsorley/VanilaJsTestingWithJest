import CoffeeFactory from "./CoffeeFactory.js";
import TeaFactory from "./TeaFactory.js";
import HotDrinkMachine from './HotDrinkMachine.js';

test("HotDrinkMachine is a function", () => {
    expect(typeof HotDrinkMachine).toBe("function");
});

test("HotDrinkMachine can be instantiated", () => {
    const hdm = new HotDrinkMachine();
    expect(hdm instanceof HotDrinkMachine).toBe(true);
});

test('makeDrink be called with "coffee" and 100', () => {
    const hdm = new HotDrinkMachine();
    hdm.register('coffee', new CoffeeFactory());
    expect(() => {
        hdm.makeDrink("coffee", 100);
    }).not.toThrow();
});

test('makeDrink be called with "tea" and 100', () => {
    const hdm = new HotDrinkMachine();
    hdm.register('tea', new TeaFactory());
    expect(() => {
        hdm.makeDrink("tea", 100);
    }).not.toThrow();
});
