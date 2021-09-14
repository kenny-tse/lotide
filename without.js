const assertArraysEqual = function(arrayOne, ArrayTwo) {
  
  if (eqArrays(arrayOne, ArrayTwo)) {
    console.log("✅✅✅ Assertion Passed");
  } else {
    console.log("🛑🛑🛑 Assertion Failed");
  }
};

const eqArrays = function(arrayOne, ArrayTwo) {
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

const without = function(source , itemsToRemove) {

  let arrayToOutput = [];
  let canAdd = true;

  for (let indexSource = 0; indexSource < source.length; indexSource++) {
    
    canAdd = true;

    for (let removeIndex = 0; removeIndex < itemsToRemove.length; removeIndex++) {

      if (itemsToRemove[removeIndex] === source[indexSource]) {
        canAdd = false;
      }
    }
    if (canAdd === true) {
      arrayToOutput.push(source[indexSource]);
    }
  }
  console.log(arrayToOutput);
  return arrayToOutput;
};



without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
//Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
