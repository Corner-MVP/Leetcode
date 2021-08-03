class Solution:
    def findUnsortedSubarray(self, nums):
        length = len(nums)
        minn, left = float('inf'), -1
        maxn, right = float('-inf'), -1
        
        for i in range(length):
            if nums[i] < maxn:
                right = i
            else:
                maxn = nums[i]
            
            if minn < nums[length - i - 1]:
                left = length - i - 1
            else:
                minn = nums[length - i - 1]
        
        return 0 if right == -1 else right - left + 1