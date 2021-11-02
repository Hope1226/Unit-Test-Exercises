const capitalize = require('./capitalizeString');

test("hello shoul return Hello", () => [
  expect(capitalize('hello')).toBe('Hello')
]);