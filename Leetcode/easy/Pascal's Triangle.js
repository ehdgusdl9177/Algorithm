/*
Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


 

Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
Example 2:

Input: numRows = 1
Output: [[1]]

*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows === 1) return [[1]];
  if (numRows === 2) return [[1], [1, 1]];
  let result = [[1], [1, 1]];

  for (let i = 2; i < numRows; i++) {
    let arr = [1];
    let prev = result[i - 1];
    for (let j = 0; j < prev.length - 1; j++) {
      arr.push(prev[j] + prev[j + 1]);
    }
    arr.push(1);
    result.push(arr);
  }
  return result;
};
