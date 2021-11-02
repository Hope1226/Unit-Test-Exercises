const capitalize = string => {
  let firstLetter = string[0].toUpperCase();
  let output = string.split("");
  output.shift();
  output.unshift(firstLetter);
  
  return output.join("");
};

module.exports = capitalize;