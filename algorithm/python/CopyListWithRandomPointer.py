# Definition for a Node.
class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random


class Solution:
    def copyRandomList(self, head: 'Node') -> 'Node':
        if not head: return

        # copy list
        p1 = head
        while p1:
            temp = p1.next
            newNode = Node(p1.val, temp)
            p1.next = newNode
            p1 = p1.next.next

        # get random list
        p1 = head
        while p1:
            random = p1.random
            p1.next.random = random.next if random else None
            p1 = p1.next.next
        
        # split two list
        p1, p2, res = head, head.next, head.next
        while p1 and p2:
            p1.next = p1.next.next
            p2.next = p2.next.next if p2.next else None
            p1 = p1.next
            p2 = p2.next
        return res