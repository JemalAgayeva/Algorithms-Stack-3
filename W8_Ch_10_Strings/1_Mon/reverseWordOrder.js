/* 
  Reverse Word Order

  Create a function that, given a string of words (with spaces), returns new string with words in reverse sequence.
  
  Input: "This is a test"
  Output: "test a is This"

  Bonus: handle punctuation and capitalization. Example: given "Life is not a drill, go for it!" you should return "It for go, drill a not is life!"
*/

// without bonus
function reverseWordOrder(wordsStr) {

  const words = [];
  let currWord = '';

  for (let i = wordsStr.length - 1; i >= 0 ; --i) {

    // multiple space characters are falsy
    if (wordsStr[i] == false) {
      // if multiple spaces in a row, currWord could still be empty
      if (currWord) {
        words.push(currWord);
        currWord = '';
      }
    }
    // prepend current letter so letters aren't reversed by
    // looping backwords
    else currWord = wordsStr[i] + currWord;
  }
  // when no space at end, last word needs to be added
  if (currWord) words.push(currWord);

  return words;
}

console.log(
  reverseWordOrder("Life is not a drill, go for it!")
);
