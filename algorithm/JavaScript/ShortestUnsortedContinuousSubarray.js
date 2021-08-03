/**
 * @param {number[]} nums
 * @return {number}
 */
 var findUnsortedSubarray = function(nums) {
  const n = nums.length
  let maxn = -Number.MAX_VALUE, right = -1;
  let minn = Number.MAX_VALUE, left = -1

  for (let i = 0; i < n; i++) {
    if (maxn > nums[i]) {
      right = i
    } else {
      maxn = nums[i]
    }

    if (minn < nums[n - i - 1]) {
      left = n - i - 1
    } else {
      minn = nums[n - i - 1]
    }
  }

  return right === -1 ? 0 : right - left + 1

};