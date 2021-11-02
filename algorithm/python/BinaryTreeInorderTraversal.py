# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
  # Recursive
    def inorderTraversal(self, root):
        if not root: return
        
        self.res = []
        self.inorder(root)
        return self.res
    
    def inorder(self, node):
        if not node: return
        
        if node.left:
            self.inorder(node.left)
        self.res.append(node.val)
        if node.right:
            self.inorder(node.right)

    # iteratively
    def inorderTraversal2(self, root):
        if not root: return
        
        stack = []
        while root:
            stack.append(root)
            root = root.left
        res = []
        while stack:
            node = stack.pop()
            res.append(node.val)
            node = node.right
            while node:
                stack.append(node)
                node = node.left
        return res