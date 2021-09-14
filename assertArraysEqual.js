const assertArraysEqual = function(arrayOne, ArrayTwo) {
  if (arrayOne.length !== ArrayTwo.length) {
    console.log("🛑🛑🛑 Assertion failed.");
    return;
  } else {
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== ArrayTwo[i]) {
        console.log("🛑🛑🛑 Assertion failed.");
        return;
      }
    }
  }
  console.log("✅✅✅ Assertion passed.");
  return;
};

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false
