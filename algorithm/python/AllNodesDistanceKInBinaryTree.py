# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def distanceK(self, root, target, k):
        parent = dict()
        res = []
        def getParent(node):
            if node.left:
                parent[node.left.val] = node
                getParent(node.left)
            if node.right:
                parent[node.right.val] = node
                getParent(node.right)

        getParent(root)
        print(parent)
        def getRes(node, pre, depth):
            if not node: return
            
            if depth == k:
                res.append(node.val)
                return
            if node.left != pre:
                getRes(node.left, node, depth+1)
            if node.right != pre:
                getRes(node.right, node, depth+1)
            if node.val not in parent.keys() and parent[node.val] != pre:
                getRes(parent[node.val], node, depth+1)
        
        getRes(target, None, 0)
        return res