/*
Given an integer array nums where the elements are sorted in ascending order, convert it to a 
height-balanced
 binary search tree.

 

Example 1:


Input: nums = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
Explanation: [0,-10,5,null,-3,null,9] is also accepted:

Example 2:


Input: nums = [1,3]
Output: [3,1]
Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.
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
 * @param {number[]} nums
 * @return {TreeNode}
 */

const treeNode = (val, left, right) => {
  this.val === undefined ? 0 : val;
  this.left === undefined ? null : left;
  this.right === undefined ? null : right;
};

var sortedArrayToBST = function (nums) {
  if (nums.length === 0) return null;
  if (nums.length === 1) return new TreeNode(nums[0]);

  const middleIndex = Math.floor(nums.length / 2);
  const root = new TreeNode(nums[middleIndex]);
  root.left = sortedArrayToBST(nums.slice(0, middleIndex));
  root.right = sortedArrayToBST(nums.slice(middleIndex + 1, nums.length));

  return root;
};
