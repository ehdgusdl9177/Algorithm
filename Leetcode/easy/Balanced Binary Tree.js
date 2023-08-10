/*
Given a binary tree, determine if it is 
height-balanced
.

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: true
Example 2:


Input: root = [1,2,2,3,3,null,null,4,4]
Output: false
Example 3:

Input: root = []
Output: true
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const search = (root) => {
  if (!root) return true;
  const left = search(root.left);
  const right = search(root.right);
  if (left === -1 || right === -1 || Math.abs(left - right) > 1) return -1;
  return Math.max(left, right) + 1;
};

var isBalanced = function (root) {
  return search(root) !== -1;
};
