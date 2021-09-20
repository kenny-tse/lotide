const assertEqual = require('./assertEqual');

const tail = function (array) {
  let arrayWithoutHead = array.slice(1);
  return arrayWithoutHead;
};

module.exports = tail;

