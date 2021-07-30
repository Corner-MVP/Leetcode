class Solution:
    def titleToNumber(self, columnTitle):
        length = len(columnTitle)
        res = 0
        for i in range(0, length):
            num = ord(columnTitle[i]) - ord('A') + 1
            idx = length - i -1
            res += num * pow(26, idx)
        
        return res