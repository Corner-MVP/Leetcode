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
 * @return {number}
 */
 var findSecondMinimumValue = function(root) {
  let res = -1
  const rootValue = root.val

  const dfs = (node) => {
    if (node === null) {
      return
    }
    if (res !== -1 && node.val >= res) {
      return
    }
    if (node.val > rootValue) {
      res = node.val
    }
    dfs(node.left)
    dfs(node.right)
  }

  dfs(root)
  return res
};