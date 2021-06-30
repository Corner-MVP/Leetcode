# Definition for a binary tree node.
class TreeNode(object):
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Codec:

    def serialize(self, root):
        """Encodes a tree to a single string.
        
        :type root: TreeNode
        :rtype: str
        """
        return self.serializeTree(root, '')
        

    def deserialize(self, data):
        """Decodes your encoded data to tree.
        
        :type data: str
        :rtype: TreeNode
        """
        arr = data.split(',')
        return self.deserializeTree(arr)
    
    def serializeTree(self, root, res):
        if not root:
            res += 'None,'
        else:
            res += str(root.val) + ','
            res = self.serializeTree(root.left, res)
            res = self.serializeTree(root.right, res)
        
        return res
    
    def deserializeTree(self, arr):
        if arr[0] == 'None':
            arr.pop(0)
            return

        root = TreeNode(int(arr[0]))
        arr.pop(0)
        root.left = self.deserializeTree(arr)
        root.right = self.deserializeTree(arr)
        
        return root