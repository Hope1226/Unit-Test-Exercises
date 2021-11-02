const  calculator = require('./calculator');

describe('calculator', () => {
  test('Calculator Add(5, 5) is equel to 10', () => {
    expect(calculator.add(5, 5)).toBe(10);
  });

  test('Calculator subtract(10, 5) is equel to 5', () => {
    expect(calculator.subtract(10, 5)).toBe(5);
  });

  test('Calculator devide(10, 5) is equel to 2', () => {
    expect(calculator.devide(10, 5)).toBe(2);
  });

  test('Calculator multiply(5, 5) is equel to 25', () => {
    expect(calculator.multiply(5, 5)).toBe(25);
  });
})