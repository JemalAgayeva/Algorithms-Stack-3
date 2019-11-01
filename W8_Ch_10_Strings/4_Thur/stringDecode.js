/* 
    String Decode

    Given an encoded string (see above), decode and return it. Given "a3b2c1d3" , return "aaabbcddd" .
*/

function strDecode(str) {
  
  let decoded = '';

  for (let i = 0; i < str.length; i++) {
    
    let n = parseInt(str[i]);

    if (n)
      decoded += str[i - 1].repeat(n);
  }
  return decoded;
}