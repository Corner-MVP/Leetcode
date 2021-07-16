class Solution:
    def maxSubArray(self, nums):

        dp = [0 for _ in range(len(nums))]

        dp[0] = nums[0]
        res = dp[0]
        for i in range(1, len(nums)):
            dp[i] = max(nums[i], nums[i] + dp[i-1])
            res = max(res, dp[i])
        
        return res