// 输入：nums = [1,0,1,0,1], goal = 2
// 输出：4
// 解释：
// 如下面黑体所示，有 4 个满足题目要求的子数组：
// [1,0,1,0,1]
// [1,0,1,0,1]
// [1,0,1,0,1]
// [1,0,1,0,1]

// 输入：nums = [0,0,0,0,0], goal = 0
// 输出：15

/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
const numSubarraysWithSum = function(nums, goal) {

  const map = new Map()
  map.set(0, 1)
  let sum = 0
  let res = 0
  
  for (const num of nums) {
    sum += num
    res += map.get(sum - goal) || 0
    map.set(sum, (map.get(sum) || 0) + 1)
  }

  return res

};

const nums = [0,0,0,0,0]
const goal = 0
console.log(numSubarraysWithSum(nums, goal))