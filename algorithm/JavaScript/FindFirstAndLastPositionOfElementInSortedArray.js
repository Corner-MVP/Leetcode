var searchRange = function(nums, target) {

    if (nums.length === 0) return [-1, -1]
    let low = 0, high = nums.length - 1

    while (low < high) {
        const mid = Math.floor((high - low) / 2) + low
        if (nums[mid] < target) low = mid + 1
        else high = mid
    }
    if (nums[low] !== target) return [-1, -1]

    const res = [low]

    while (low < nums.length && nums[low] === target) low += 1
    
    res.push(low-1)

    return res

};