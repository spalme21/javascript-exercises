const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, nextNum) => {
    return total + nextNum;
  }, 0);
};

const multiply = function(a, b) {
  const args = [...arguments];
  return args.reduce((total, nextNum) => {
    return total * nextNum;
  }, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
	const arr = Array.from(
    {length: num},
    (value, index) => index + 1
  );
  return arr.reduce((total, nextNum) => {
    return total * nextNum;
  }, 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
