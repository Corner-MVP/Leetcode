/**
 * @param {number} label
 * @return {number[]}
 */
 var pathInZigZagTree = function(label) {
    
    const res = [label]
    let index = 1
    while (2 ** index <= label) {
        index += 1
    }
    index -= 1

    while (index > 0) {
        const temp = Math.floor((label - 2 ** index) / 2) + 1
        const idx = 2 ** index - temp
        res.unshift(idx)
        label = idx
        index -= 1
    }

    return res

};
