const reverseString =require("./reverseString");

test("Hello will return olleH", () => {
  expect(reverseString('Hello')).toBe('olleH');
})