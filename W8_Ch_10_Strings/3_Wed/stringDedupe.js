/* 
  String: Dedupe

  Remove duplicate characters 
    - (case-sensitive) including punctuation.

  Bonus: Keep only the last instance of each character.
  
  Input: "Snaps! crackles! pops!"
  Output: "Snrackle ops!"
*/

function stringDedupeLastInstance(str) {
  let distinctStr = "";
  const seen = {};
  
  for (let i = str.length - 1; i >= 0 ; --i) {
    if (!seen[str[i]]) {
      distinctStr = str[i] + distinctStr;
      seen[str[i]] = true;
    }
  }
  return distinctStr;
}

// dedupe but includes first occurence
// rather than includes only the last occurence
function stringDedupe(str) {
  let distinct = "";
  const seen = {};

  for (const char of str) {
    if (!seen[char])
      distinct += char;

    seen[char] = true;
  }
  return distinct;
}

console.log(stringDedupeLastInstance("Snaps! crackles! pops!"));