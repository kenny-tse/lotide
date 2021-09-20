const assertEqual = function (actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (someString) {

  const lettersToOutput = {};
  let stringWithoutSpaces = someString.replace(/\s+/g, '');
  let stringToSort = [];

  for (let i = 0; i < stringWithoutSpaces.length; i++) {
    stringToSort.push(stringWithoutSpaces[i]);
  }

  for (let i = 0; i < stringToSort.length; i++) {

    //if it already exists
    if (lettersToOutput[stringToSort[i]]) {
      lettersToOutput[stringToSort[i]] = lettersToOutput[stringToSort[i]] + 1;
    } else {
      lettersToOutput[stringToSort[i]] = 1;
    }
  }

  console.log(lettersToOutput);
  return lettersToOutput;

};

module.exports = countLetters;

countLetters("lighthouse in the house");

