const eqArrays = require('./eqArrays');

const assertArraysEqual = function (arrayOne, ArrayTwo) {

  if (eqArrays(arrayOne, ArrayTwo)) {
    console.log("✅✅✅ Assertion Passed");
  } else {
    console.log("🛑🛑🛑 Assertion Failed");
  }
};

module.exports = assertArraysEqual;