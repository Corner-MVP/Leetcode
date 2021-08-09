/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    const dp = new Array(n+1).fill(0);
    dp[1] = 1;
    let p2 = 1, p3 = 1, p5 = 1;

    for (let i = 2; i < n+1; i++) {
      const mini_num = Math.min(dp[p2] * 2, dp[p3] * 3, dp[p5] * 5)
      dp[i] = mini_num
      if (mini_num === dp[p2] * 2) p2 += 1
      if (mini_num === dp[p3] * 3) p3 += 1
      if (mini_num === dp[p5] * 5) p5 += 1
    }

    return dp[n]

};