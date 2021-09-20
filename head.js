// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');

const head = function (array) {
  if (array.length >= 1) {
    let firstArrayElement = array[0];
    return firstArrayElement;
  }
  else {
    return undefined;
  }
}

module.exports = head;
