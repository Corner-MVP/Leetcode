class Solution:
    def escapeGhosts(self, ghosts, target) -> bool:
          start = [0, 0]
          distance = self.shortestDistance(start, target)

          return all(self.shortestDistance(ghost, target) > distance for ghost in ghosts)
    
    def shortestDistance(self, start, end):
          return abs(end[0] - start[0]) + abs(end[1] - start[1])