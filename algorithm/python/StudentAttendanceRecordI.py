class Solution:
    def checkRecord(self, s):
        n = len(s)
        absent, late, i = 0, 0, 0
        while i < n:
            if s[i] == 'A':
                absent += 1
            elif s[i] == 'L':
                index = 0
                while i < n and s[i] == 'L':
                    i += 1
                    index += 1
                i -= 1
                late = max(late, index)
            i += 1
        
        return True if late < 3 and absent < 2 else False