const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

const middle = function (array) {

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

module.exports = middle;