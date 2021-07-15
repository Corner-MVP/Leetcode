/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

 function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
 }

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
 const serialize = function(root) {
    return serializeTree(root, '')
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
const deserialize = function(data) {
    const arr = data.split(',');
    return deserializeTree(arr)
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

const serializeTree = function (root, res) {
    if (root === null) {
        res += 'None';
    } else {
        res += root.val + ',';
        res = serializeTree(root.left, res);
        res = serializeTree(root.right, res);
    }
    return res
}

const deserializeTree = function (arr) {
    if (arr[0] === 'None') {
        arr.shift();
        return null;
    }

    const root = new TreeNode(parseInt(arr[0]));
    arr.shift();
    root.left = deserializeTree(arr);
    root.right = deserializeTree(arr);

    return root

}