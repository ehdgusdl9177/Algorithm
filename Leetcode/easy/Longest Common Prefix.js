/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let result = "";
  let isComple = true;
  for (let i = 0; i < strs[0].length; i++) {
    let word = strs[0].slice(0, i + 1);
    for (let j = 1; j < strs.length; j++) {
      if (word !== strs[j].slice(0, i + 1)) {
        isComple = false;
        break;
      }
    }
    if (isComple) {
      result = word;
    }
  }
  return result;
};
