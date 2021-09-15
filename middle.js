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

const middle = function(array) {

  const arrayToReturn = [];

  if (array.length >= 0 && array.length <= 1) {
    console.log(arrayToReturn);
    return arrayToReturn;
  }

  if ((array.length + 1) % 2 === 0) {

    let IndexOfINterest = (array.length + 1) / 2;

    arrayToReturn.push(array[IndexOfINterest - 1]);

  } else if ((array.legnth + 1) % 2 !== 0) {

    let IndexOfINterest = Math.floor((array.length + 1) / 2);
    arrayToReturn.push(array[IndexOfINterest - 1]);
    arrayToReturn.push(array[IndexOfINterest]);

    
  }
  console.log(arrayToReturn);
  return arrayToReturn;
};

middle([1, 2, 3]); // => [2]
assertArraysEqual(middle([1, 2, 3]), [2]);

middle([1, 2, 3, 4, 5]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

middle([1, 2, 3, 4]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4]), [2,3]);

middle([1, 2, 3, 4, 5, 6]); // => [3, 4]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]);

middle([]); // => []
assertArraysEqual(middle([]), []);

middle([1]); // => []
assertArraysEqual(middle([1]), []);