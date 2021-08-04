class Solution:
    def eventualSafeNodes(self, graph):
      length = len(graph)
      color = [0 for _ in range(length)]
      return [i for i in range(length) if self.isSafety(i, color, graph)]
    
    def isSafety(self, node, color, graph):
      if color[node]:
        return color[node] == 2
      
      color[node] = 1
      for i in graph[node]:
          if not self.isSafety(i, color, graph):
            return False
      color[node] = 2
      return True