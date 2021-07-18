import collections

class Solution:
    # DFS
    # def numWays(self, n, relation, k):
    #     graph = collections.defaultdict(list)

    #     for pair in relation:
    #         graph[pair[0]].append(pair[1])
        
    #     self.res = 0
    #     self.dfs(0, n, k, graph)
    #     return self.res
    
    # def dfs(self, curr, n, k, graph):
    #     if k == 0:
    #         if curr == n-1:
    #             self.res += 1
    #         return
        
    #     for node in graph[curr]:
    #         self.dfs(node, n, k-1, graph)

    # BFS
    # def numWays(self, n, relation, k):

    #     graph = collections.defaultdict(list)

    #     for pair in relation:
    #         graph[pair[0]].append(pair[1])

    #     queue = [0]
    #     while queue and k:
    #         length = len(queue)
    #         while length:
    #             node = queue.pop(0)
    #             for nextNode in graph[node]:
    #                 queue.append(nextNode)
    #             length -= 1
    #         k -= 1
        
    #     res = 0
    #     for node in queue:
    #         if node == n-1:
    #             res += 1
    #     return res

    # DP
    def numWays(self, n, relation, k):
        
        dp = [[0 for _ in range(n + 1)] for _ in range(k + 1)]

        dp[0][0] = 1
        for i in range(k):
            for edge in relation:
                src = edge[0]
                dist = edge[1]
                dp[i+1][dist] += dp[i][src]
        
        return dp[k][-1]

test = Solution()
n = 5
relation = [[0,2],[2,1],[3,4],[2,3],[1,4],[2,0],[0,4]]
k = 3
print(test.numWays(n, relation, k))

