/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
    const len = nums.length;
    const f = new Map();
    for (let i = 0; i < len; i++) {
      f[i] = new Map();
    }
    let res = 0;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < i; j++) {
        const gap = nums[i] - nums[j];
        cnt = f[j].get(gap) || 0;
        res += cnt;
        f[i].set(gap, ( f[i].get(gap) || 0 ) + cnt + 1);
      }
    }

    return res

};