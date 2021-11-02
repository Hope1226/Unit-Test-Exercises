const calculator = (() => {
  const add = (a, b) => a + b;
  const subtract = (a, b) => a -b;
  const devide = (a, b) => a / b;
  const multiply = (a, b) => a * b;

  return {add, subtract, devide, multiply}
})();

module.exports = calculator;