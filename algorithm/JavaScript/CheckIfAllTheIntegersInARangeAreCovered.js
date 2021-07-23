/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
 var isCovered = function(ranges, left, right) {
    const diff = new Array(52).fill(0)
    for (const pair of ranges) {
        diff[pair[0]] += 1
        diff[pair[1] + 1] -= 1
    }

    let curr = 0
    for (let i = 0; i < 51; i++) {
        curr += diff[i]
        if (i >= left && i <= right && curr <=0) return false
    }

    return true
};