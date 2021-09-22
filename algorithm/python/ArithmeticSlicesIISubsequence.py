from collections import defaultdict
class Solution:
    def numberOfArithmeticSlices(self, nums):
        n = len(nums)
        f = [defaultdict(int) for _ in nums]
        res = 0
        for i in range(n):
            for j in range(i):
                gap = nums[i] - nums[j]
                cnt = f[j][gap]
                res += cnt
                f[i][gap] += cnt + 1
        
        return res