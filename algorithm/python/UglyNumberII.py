class Solution:
    def nthUglyNumber(self, n):
        dp = [0] * (n+1)
        dp[1] = 1
        p2, p3, p5 = 1, 1, 1

        for i in range(2, n+1):
            target = min(dp[p2] * 2, dp[p3] * 3, dp[p5] * 5)
            dp[i] = target
            if target == dp[p2] * 2: p2 += 1
            if target == dp[p3] * 3: p3 += 1
            if target == dp[p5] * 5: p5 += 1

        return dp[n]