class Solution:
    def pathInZigZagTree(self, label):

        index = 1
        while pow(2, index) <= label:
            index += 1
        
        index -= 1

        res = [label]
        while index > 0:
            temp = (label - pow(2, index)) // 2 + 1
            idx = pow(2, index) - temp
            res.insert(0, idx)
            label = idx
            index -= 1
        
        return res