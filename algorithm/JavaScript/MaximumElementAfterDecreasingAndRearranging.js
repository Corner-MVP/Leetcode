var maximumElementAfterDecrementingAndRearranging = function(arr) {

    arr.sort( (a, b) => a - b)
    const res = [1]

    for (let i = 1; i < arr.length; i++) {
        target = res[i-1] + 1
        if (arr[i] >= target) {
            res.push(target)
        } else {
            res.push(target-1)
        }
    }

    return res[arr.length - 1]

};