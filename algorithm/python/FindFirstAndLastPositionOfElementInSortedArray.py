class Solution:
    def searchRange(self, nums, target):

        if not nums: return [-1, -1]
        low, high = 0, len(nums) - 1

        while low < high:
            mid = (high - low) // 2 + low
            if nums[mid] < target:
                low = mid + 1
            else:
                high = mid
        print(low)
        if nums[low] != target: return [-1, -1]

        res = [low]

        while low < len(nums) and nums[low] == target:
            low += 1
        
        res.append(low-1)
        return res