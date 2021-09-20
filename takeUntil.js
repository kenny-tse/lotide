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

const takeUntil = function (array, callback) {

  let arrayToStore = [];

  for (let i = 0; i < array.length; i++) {

    if (callback(array[i]) === false) {
      arrayToStore.push(array[i]);
    } else {
      return arrayToStore;
    }
  }
  return arrayToStore;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// Expected output
// [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]


assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']);

module.exports = takeUntil;