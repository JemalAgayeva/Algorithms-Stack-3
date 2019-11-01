/* 
  Intersect Sorted Arrays (dedupe)

  Efficiently combine two already sorted multiset arrays 
  into an array containing the sorted set intersection of the two.

  Output: only the shared values between the two arrays (deduped).
  
  Input: [1,2,2,2,7], [2,2,6,6,7]
  Output: [2,7]
*/

function intersectSortedArraysDedupe(arr1, arr2) {
  let idx1 = idx2 = 0;
  const len1 = arr1.length, len2 = arr2.length, result = [];
  const seen = {};

  while (idx1 < len1 || idx2 < len2) {
    let itemToAdd;

    if (idx1 < len1 && idx2 < len2) {
      if (arr1[idx1] < arr2[idx2]) {
        itemToAdd = arr1[idx1];
        idx1++
      }
      else {
        itemToAdd = arr2[idx2];
        idx2++
      }
    }
    // when idx goes out of bounds for 1 array but not the other
    // out of bounds returns undefined
    else {
      if (arr1[idx1] !== undefined) {
        itemToAdd = arr1[idx1];
        idx1++;
      }
      else {
        itemToAdd = arr2[idx2];
        idx2++;
      }
    }
    if (seen.hasOwnProperty(itemToAdd) === false) {
      result.push(itemToAdd);
      seen[itemToAdd] = true;
    }
  }
  return result;
}