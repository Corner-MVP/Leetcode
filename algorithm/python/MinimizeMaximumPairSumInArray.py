class Solution:
    def minPairSum(self, nums):
      nums.sort()
      res = float('-inf')
      length = len(nums)
      index = 0
      while index <= length // 2:
        temp = nums[index] + nums[length-index-1]
        res = max(res, temp)
        index += 1
      
      return res
