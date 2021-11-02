# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSymmetric(self, root):
        return self.isSame(root.left, root.right)
    
    def isSame(self, left, right):
        if not left and not right: return True
        
        if not left or not right or left.val != right.val: return False
        
        return self.isSame(left.left, right.right) and self.isSame(left.right, right.left)
        