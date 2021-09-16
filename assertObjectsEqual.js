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

const flatten = function(arrayToFlatten) {

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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {

  let arrayOfKeysObject1 = [];
  let arrayOfValuesObject1 = [];

  let arrayOfKeysObject2 = [];
  let arrayOfValuesObject2 = [];


  for (const key in object1) {
    arrayOfKeysObject1.push(key);
    arrayOfValuesObject1.push(object1[key]);
  }

  for (const key in object2) {
    arrayOfKeysObject2.push(key);
    arrayOfValuesObject2.push(object2[key]);
  }

  let flatAndSortedKeys1 = flatten(arrayOfKeysObject1).sort();
  let flatAndSortedKeys2 = flatten(arrayOfKeysObject2).sort();

  let flatAndSortedValues1 = flatten(arrayOfValuesObject1).sort();
  let flatAndSortedValues2 = flatten(arrayOfValuesObject2).sort();
  
  if (eqArrays(flatAndSortedKeys1, flatAndSortedKeys2) === true && eqArrays(flatAndSortedValues1, flatAndSortedValues2) === true) {
    return true;
  } else {
    return false;
  }
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual,expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' }); // true

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false
