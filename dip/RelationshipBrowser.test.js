import RelationshipBrowser from "./RelationshipBrowser";

test("RelationshipBrowser is a function", () => {
    expect(typeof RelationshipBrowser).toBe("function");
    });
test('cannot be instantiated directly', () => {
    expect(() => {
        new RelationshipBrowser();
    }).toThrow(TypeError);
});

test('findAllChildrenOf is not called directly', () => {
    expect(() => {
        RelationshipBrowser.findAllChildrenOf();
    }).toThrow(TypeError);
});
