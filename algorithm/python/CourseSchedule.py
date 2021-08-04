from collections import defaultdict

class Solution:
  def canFinish(self, numCourses, prerequisites):
      relation = defaultdict(list)
      for group in prerequisites:
          child, parent = group[0], group[1]
          relation[parent].append(child)
      
      visit = [0 for _ in range(numCourses)]
      
      def DFS(node):
          
          if visit[node] == 1: 
              return False
          if visit[node] == 2: 
              return True


          visit[node] = 1
          for nextNode in relation[node]:
              if not DFS(nextNode):
                  return False


          visit[node] = 2
          
          return True
      
      for course in range(numCourses):
          if not DFS(course):
              return False
      return True