class Solution:
    def maxSubArray(self, nums):
        pre, res = 0, nums[0]

        for i in range(1, len(nums)):
            pre = max(pre, pre + nums[i])
            res = max(res, pre)
        
        return res