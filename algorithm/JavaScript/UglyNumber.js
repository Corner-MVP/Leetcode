/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    if (n <= 0) return false

    const factors = [2, 3, 5]

    for (const factor of factors) {
      while (n % factor === 0) {
        n  = n / factor
      }
    }
    
    return n === 1
};
