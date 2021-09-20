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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false
  }

  for (const key in object1) {

    if (Array.isArray(object1[key])) {

      const isEqual = eqArrays(object1[key], object2[key]);
      console.log("this is isEqual: ", isEqual);

      if (!isEqual) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }

  return true;
};

const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;

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

const ah = { a: 1, b: [1, 2] };
const ha = { b: 2, a: [1, 1] };
assertObjectsEqual(ha, ah); // => should be false