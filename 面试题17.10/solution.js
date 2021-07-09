var majorityElement = function(nums) {

    let candidate = -1
    let count = 0

    for (const num of nums) {
        if (count === 0) {
            candidate = num
        }

        if (candidate === num) {
            count += 1
        } else {
            count -= 1
        }
    }

    const size = nums.length
    let res = 0
    nums.forEach( num => {
        res = num === candidate ? res + 1 : res
    })

    return res > Math.floor(size / 2) ? candidate : -1

};