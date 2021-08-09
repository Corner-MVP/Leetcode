class Solution:
    def nthSuperUglyNumber(self, n, primes):
        dp = [0 for _ in range(n+1)]
        dp[1] = 1
        pointers = [1 for _ in range(len(primes))]

        for i in range(2, n+1):
            min_num = min(pointers[j] * primes[j] for j in range(len(primes)))
            dp[i] = min_num
            for j in range(len(primes)):
                if dp[pointers[j]] * primes[j] == min_num:
                    pointers[j] += 1
        
        return dp[n]