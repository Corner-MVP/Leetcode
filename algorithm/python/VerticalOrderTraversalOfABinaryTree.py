# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def verticalTraversal(self, root):
        if not root: return []
        self.node = []
        self.dfs(root, 0, 0)
        self.node.sort()

        current = self.node[0][0]
        res = [[]]

        for width, height, value in self.node:
            
            if width == current:
                res[-1].append(value)
            else:
                res.append([value])
                current = width
        return res

    
    def dfs(self, root, height, width):
        if not root: return
        self.node.append((width, height, root.val))
        self.dfs(root.left, height+1, width-1)
        self.dfs(root.right, height+1, width+1)