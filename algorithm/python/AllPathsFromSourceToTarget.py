class Solution:
    def allPathsSourceTarget(self, graph):
        visited = [0 for _ in range(len(graph))]
        self.res = []
        self.dfs(0, len(graph)-1, visited, [0], graph)
        return self.res
        
    def dfs(self, start, end, visited, path, graph):
        if start == end:
            self.res.append(path)
            return
        
        for vertex in graph[start]:
            if not visited[vertex]:
                visited[vertex] = 1
                self.dfs(vertex, end, visited, path+[vertex], graph)
                visited[vertex] = 0