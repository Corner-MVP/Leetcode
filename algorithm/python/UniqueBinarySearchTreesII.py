# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def generateTrees(self, n):
        return self.getTree(1, n)
    
    def getTree(self, start, end):
        if start > end:
            return [None]
        
        allTrees = []
        for i in range(start, end + 1):
            leftTree = self.getTree(start, i - 1)
            
            rightTree = self.getTree(i + 1, end)
            
            
            for l in leftTree:
                for r in rightTree:
                    treeNode = TreeNode(i)
                    treeNode.left = l
                    treeNode.right = r
                    allTrees.append(treeNode)
        
        return allTrees