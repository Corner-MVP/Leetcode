class Solution:
    def reverseVowels(self, s):
        vowels = ['a', 'e', 'i', 'o', 'u']
        l, r = 0, len(s) - 1
        res = ['' for _ in range(len(s))]

        while l <= r:
            if s[l].lower() in vowels and s[r].lower() in vowels:
                res[l] = s[r]
                res[r] = s[l]
                l += 1
                r -= 1
            elif s[l].lower() not in vowels:
                res[l] = s[l]
                l += 1
            elif s[r].lower() not in vowels:
                res[r] = s[r]
                r += 1
        
        return ''.join(res)