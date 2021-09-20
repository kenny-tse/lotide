const assertEqual = require('./assertEqual');

const eqArrays = function (arrayOne, ArrayTwo) {
  if (arrayOne.length !== ArrayTwo.length) {
    return false;
  } else {
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== ArrayTwo[i]) {
        return false;
      }
    }
  }
  return true;
};

module.exports = eqArrays;
