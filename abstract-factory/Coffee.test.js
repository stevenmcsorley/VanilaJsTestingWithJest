import Coffee from "./Coffee.js";

test("Coffee is a function", () => {
    expect(typeof Coffee).toBe("function");
});

test("Coffee can be instantiated", () => {
    const c = new Coffee();
    expect(c instanceof Coffee).toBe(true);
});

test("Coffee consume can be called indirectly", () => {
    const c = new Coffee();
    expect(() => {
        c.consume();
    }).not.toThrow();
});

