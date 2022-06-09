import {binarySubtraction} from './index.js';


test('binary subtract function is defined', () => {
    expect(binarySubtraction).toBeDefined();
});

test ('binary subtract function returns a string', () => {
    expect(typeof binarySubtraction).toBe('string');
});

test ('binary subtract function returns a string of 1s and 0s', () => {
    expect(binarySubtraction).toMatch(/^[01]+$/);
});



