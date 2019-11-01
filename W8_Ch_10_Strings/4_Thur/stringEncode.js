/* 
  String Encode

  You are given a string that may contain sequences of consecutive characters.
  Create a function to shorten a string by including the character,
  then the number of times it appears. 
  
  Input: "aaaabbcddd"
  Output: "a4b2c1d3"
  
  If result is not shorter (such as "bb" => "b2" ),
  return the original string.
*/

/* 
  despite the inner while loop, still O(N) time
  
  the inner while loop increments i, so after the
  while loop finishes, the for loop picks up where
  the while loop ended.
*/
function strEncode(str) {
  let encoded = "";

  for (let i = 0; i < str.length; ++i) {
    let currentLetter = str[i], dupeCount = 1;

    while (str[i + 1] === currentLetter) {
      ++dupeCount;
      ++i;
    }
    encoded += currentLetter + dupeCount;
  }
  return encoded.length === str.length ? str : encoded;
}

function strEncodeHashTable(str) {

  const charFreq = {};
  let encoded = "";

  for (const char of str) {
    if (charFreq[char])
      charFreq[char]++;
    else
      charFreq[char] = 1;
  }

  // iterate back over str to get the proper order
  // order of keys on obj is not guaranteed to be in order
  for (const char of str) {

    if (charFreq[char]) {
      encoded += char + charFreq[char];
      // we need to avoid the dupes
      charFreq[char] = 0;
    }
  }
  return encoded.length === str.length ? str : encoded;
}