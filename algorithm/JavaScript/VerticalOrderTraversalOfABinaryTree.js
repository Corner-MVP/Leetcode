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
 * @return {number[][]}
 */
 var verticalTraversal = function(root) {
    const node = []
    const dfs = (root, height, width) => {
        if (root === null) return
        node.push([width, height, root.val])
        dfs(root.left, height + 1, width - 1)
        dfs(root.right, height + 1, width + 1)
    }
    dfs(root, 0, 0)
    node.sort((tuple1, tuple2) => {
        if (tuple1[0] !== tuple2[0]) return tuple1[0] - tuple2[0]
        else if (tuple1[1] !== tuple2[1]) return tuple1[1] - tuple2[1]
        else return tuple1[2] - tuple2[2]
    })
    let curr = node[0][0]
    const res = [[]]
    
    for (let pair of node) {
        const width = pair[0], value = pair[2]
        if (width === curr) {
            res[res.length - 1].push(value)
        } else {
            res.push([value])
            curr = width
        }
    }

    return res

};