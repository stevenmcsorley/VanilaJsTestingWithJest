import PointFactory from "./PointFactory";

test("PointFactory is a function", () => {
    expect(typeof PointFactory).toBe("function");
});

// test is a static class
test("PointFactory is called", () => {  
    expect(PointFactory.createCaresianPoint()).toBeInstanceOf(PointFactory);
});


test('PointFactory can create a cartesian point', () => {
    expect(PointFactory.createCaresianPoint(1, 2)).toEqual({ x: 1, y: 2 });
});

test('PointFactory can create a polar point', () => {
    expect(PointFactory.createPolarPoint(1, 2)).toEqual({ x: -0.4161468365471424, y:  0.9092974268256817 });
});





