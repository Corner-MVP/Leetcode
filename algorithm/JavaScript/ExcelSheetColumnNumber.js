/**
 * @param {string} columnTitle
 * @return {number}
 */
 var titleToNumber = function(columnTitle) {
    let res =0
    for (let i = 0; i < columnTitle.length; i++) {
        const num = columnTitle[i].charCodeAt() - 'A'.charCodeAt() + 1
        const idx = columnTitle.length - i - 1
        res += num * (26 ** idx)
    }
    return res
};