const assertArraysEqual = function (arrayOne, ArrayTwo) {

  if (eqArrays(arrayOne, ArrayTwo)) {
    console.log("✅✅✅ Assertion Passed");
  } else {
    console.log("🛑🛑🛑 Assertion Failed");
  }
};

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

const flatten = function (arrayToFlatten) {

  let arrayToReturn = [];

  for (let i = 0; i < arrayToFlatten.length; i++) {
    if (Array.isArray(arrayToFlatten[i])) {
      for (let innerIndex = 0; innerIndex < arrayToFlatten[i].length; innerIndex++) {
        arrayToReturn.push(arrayToFlatten[i][innerIndex]);
      }
    } else {
      arrayToReturn.push(arrayToFlatten[i]);
    }
  }
  return arrayToReturn;
};

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);

module.exports = flatten;
