/* 
  String: Rotate String

  Create a standalone function that accepts a string and an integer, and rotates the characters in the string to the right by that amount.
  
  Input: "Hello World", 0
  Output: "orldHello W"

  Input: "Hello World", 4
  Output: "Hello World"
*/

function rotateStr(str, n) {
  
  let res = "";
  let rotatedSubStr = "";

  for (let i = 0; i < str.length; ++i) {
    if (i >= str.length - n) {
      rotatedSubStr += str[i];
    }
    else {
      res += str[i];
    }
  }
  return rotatedSubStr + res;
}

// slice the last `n` characters then concatenate that to the string without those last `n` characters
function rotateString(str, n) {
  return str.slice(str.length - n) + str.slice(0, str.length - n);
}

console.log(rotateStr("Hello World", 0));
console.log(rotateString("Hello World", 0));