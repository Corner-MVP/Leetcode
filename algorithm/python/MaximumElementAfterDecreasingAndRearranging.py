class Solution:
    def maximumElementAfterDecrementingAndRearranging(self, arr):
        arr.sort()
        res = [1]

        for i in range(1, len(arr)):
            target = res[i-1] + 1
            if arr[i] >= target:
                res.append(target)
            else:
                res.append(target-1)
        
        return res[len(arr) - 1]