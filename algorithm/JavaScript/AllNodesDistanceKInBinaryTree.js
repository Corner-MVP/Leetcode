/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
 var distanceK = function(root, target, k) {
    const parent = new Map()
    const res = []
    const getParent = (node) => {
      if (node.left !== null) {
        parent.set(node.left.val, node);
        getParent(node.left)
      }
      if (node.right !== null) {
        parent.set(node.right.val, node)
        getParent(node.right)
      }
    }
    getParent(root)

    const findRes = (node, from, depth, k) => {
      if (node == null) return

      if (depth === k) {
        res.push(node.val)
        return
      }

      if (node.left !== from) {
        findRes(node.left, node, depth+1, k)
      }
      if (node.right !== from) {
        findRes(node.right, node, depth+1, k)
      }
      if (parent.get(node.val) !== from) {
        findRes(parent.get(node.val), node, depth+1, k)
      }
    }

    findRes(target, null, 0, k)
    return res

};