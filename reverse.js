
const reverse = function (array) {

  for (let indexWords = 0; indexWords < array.length; indexWords++) {

    let wordBackwards = "";

    for (let indexOfLetters = array[indexWords].length - 1; indexOfLetters >= 0; indexOfLetters--) {

      wordBackwards = wordBackwards + (array[indexWords][indexOfLetters]);

    }
    console.log(wordBackwards);
  }
};

const args = process.argv;
reverse(args.splice(2));

module.exports = reverse;