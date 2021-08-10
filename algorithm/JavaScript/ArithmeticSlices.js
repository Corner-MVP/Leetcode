/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
    const n = nums.length;
    if (n <= 2) return 0;
    let gap = nums[1] - nums[0], length = 0, res = 0;
    for (let i = 2; i < n; i++) {
      if (nums[i] - nums[i-1] === gap) {
        length += 1;
      } else {
        gap = nums[i] - nums[i-1]
        length = 0;
      }
      res += length;
    }


    return res;

};