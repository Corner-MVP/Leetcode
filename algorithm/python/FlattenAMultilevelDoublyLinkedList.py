# Definition for a Node.

class Node:
    def __init__(self, val, prev, next, child):
          self.val = val
          self.prev = prev
          self.next = next
          self.child = child

class Solution:
    def flatten(self, head):
        if not head: return

        dummy = Node(0, None, head, None)
        self.dfs(dummy, head)

        dummy.next.prev = None
        return dummy.next

    def dfs(self, prev, curr):
        if not curr:
          return prev
        
        curr.prev = prev
        prev.next = curr

        tempNext = curr.next
        tail = self.dfs(curr, curr.child)
        curr.child = None
        return self.dfs(tail, tempNext)