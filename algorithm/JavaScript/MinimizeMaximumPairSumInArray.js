/**
 * @param {number[]} nums
 * @return {number}
 */
 var minPairSum = function(nums) {
   nums.sort((a, b) => a - b)
   len = nums.length
   let index = 0, res = -Infinity
   while (index <= len / 2) {
     const temp = nums[index] + nums[len - index - 1]
     res = Math.max(res, temp)
     index += 1
   }
   return res

};