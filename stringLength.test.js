const stringLength = require('./stringLength');

test('The length of hello is equel to 5', ()=>{
  expect(stringLength('hello')).toBe(5);
});

test('If the length of the str > 10 return error', ()=> {
  expect(() => stringLength('verylongstring')).toThrow(Error);
});


test('If the length of the str > 1 return error', ()=> {
  expect(() => stringLength('')).toThrow(Error);
});