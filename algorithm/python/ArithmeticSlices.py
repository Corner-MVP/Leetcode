class Solution:
    def numberOfArithmeticSlices(self, nums):
        n = len(nums)
        if n <= 2: return 0
        gap, length, res = nums[1] - nums[0], 0, 0

        for i in range(2, n):
            if nums[i] - nums[i-1] == gap:
                length += 1
            else:
                gap = nums[i] - nums[i-1]
                length = 0
            res += length
        
        return res