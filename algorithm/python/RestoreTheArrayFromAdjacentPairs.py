import collections
class Solution:
    def restoreArray(self, adjacentPairs):

        graph = collections.defaultdict(list)
        count = dict()

        for num1, num2 in adjacentPairs:
            graph[num1].append(num2)
            graph[num2].append(num1)

        start = 0
        for key in graph.keys():
            if len(graph[key]) == 1:
                start = key
                break
        
        res = [0 for _ in range(len(adjacentPairs) + 1)]
        res[0] = start
        res[1] = graph[start][0]
        for i in range(2, len(adjacentPairs) + 1):
            adj = graph[res[i- 1]]
            res[i] = adj[0] if res[i-2] != adj[0] else adj[1]
        
        return res