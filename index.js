/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

const countingSheep = function(input) {
  if (input === 0) {
    return console.log('All sheep jumped over the fence');
  }

  console.log(`${input}: Another sheep jumps over the fence`);
  countingSheep(input - 1);
};

const powerCalculator = function(base, exponent) {
  if (exponent <= 0) {
    return console.log('exponent should be >= 0');
  } else if (exponent === 1) {
    return console.log(base);
  }

  powerCalculator(base = base * base, exponent - 1);
};

const reverseString = function(str) {
  if (str.length === 0) {
    return ''
  }
  const lastChar = str.charAt(str.length - 1);
  return lastChar + reverseString(str.slice(0,-1))
}

console.log(reverseString('Hello'))