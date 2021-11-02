const stringLength = str => {
  if(str.length > 0 && str.length < 10) return str.length 
  else throw new Error("Error: not valid value");
}

module.exports = stringLength;