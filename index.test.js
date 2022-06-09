import Index from './index.js';

test('binary subtract function is defined', () => {
    expect(Index.binarySubtraction).toBeDefined();
});

test( 'binary subtract function returns a string', () => {
    expect(typeof Index.binarySubtraction).toBe('string');
});

test ('binary subtract function returns a string of 1s and 0s', () => {
    expect(Index.binarySubtraction).toMatch(/^[01]+$/);
});



