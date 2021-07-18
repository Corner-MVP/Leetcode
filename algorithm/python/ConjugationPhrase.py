from collections import defaultdict

class Solution:
    def groupAnagrams(self, strs):

      Map = defaultdict(list)

      for str in strs:
        alpha = [0 for _ in range(26)]
        for letter in str:
          num = ord(letter) - ord('a')
          alpha[num] += 1
        Map[tuple(alpha)].append(str)
      
      return list(Map.values())
