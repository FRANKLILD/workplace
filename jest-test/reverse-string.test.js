const reverseString = require('./reverse-string');

test('reverseString function exists', () => {
    expect(reverseString).toBeDefined();

})

test('String reverse', () => {
    expect(reverseString('hello')).toEqual('olleh');
})