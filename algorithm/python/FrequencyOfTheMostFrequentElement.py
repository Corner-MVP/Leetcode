class Solution:
    def maxFrequency(self, nums, k):
        nums.sort()

        left, right, total, res = 0, 0, 0, 0

        while right < len(nums):
            total += nums[right]

            while left < right and total + k < (right - left + 1) * nums[right]:
                total -= nums[left]
                left += 1

            res = max(res, right - left + 1)
            right += 1
        
        return res