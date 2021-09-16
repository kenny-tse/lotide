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

const letterPositions = function(sentence) {
  
  const results = {};

  let stringToCount = [];

  for (let i = 0; i < sentence.length; i++) {
    stringToCount.push(sentence[i]);
  }
  
  for (let i = 0; i < stringToCount.length; i++) {
    
    if (stringToCount[i] !== " ") {

      if (results[stringToCount[i]]) {

        results[stringToCount[i]].push(i);

      } else {

        results[stringToCount[i]] = [i];
      }
    }
  }

  console.log(results);
  return results;
};


assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2,3]);
assertArraysEqual(letterPositions("hello").o, [4]);
