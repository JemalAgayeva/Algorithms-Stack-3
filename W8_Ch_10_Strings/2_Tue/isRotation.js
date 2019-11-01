/* 
  String: ionIs Rotat (Is Rotation)

  Create the function isRotation(str1,str2) that returns whether the second string is a rotation of the first. Would you change your implementation if you knew that the two were usually entirely unrelated?
*/



function isRotation(s1, s2) {
  if (s1.length !== s2.length || s1 === s2)
    return false;

  return (s1 + s1).includes(s2);
}

/* 
  s1: ABCD
  s1 + s1: ABCDABCD
  s2: CDAB
  s2: DABC
  s2: BCDA

  all rotated versions of s2 are included in s1 + s1
*/