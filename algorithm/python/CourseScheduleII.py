from collections import defaultdict
class Solution:
    def findOrder(self, numCourses, prerequisites):
        relation = defaultdict(list)
        for group in prerequisites:
            child, parent = group[0], group[1]
            relation[parent].append(child)
        
        visit = [0 for i in range(numCourses)]
        order = []
        
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
            order.append(node)
            return True
        
        for course in range(numCourses):
            if visit[course] == 0:
                if not DFS(course):
                    return []
        return order[::-1]