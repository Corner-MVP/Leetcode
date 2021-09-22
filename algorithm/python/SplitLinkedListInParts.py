# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def splitListToParts(self, root, k):
        length, node = 0, root
        
        while node:
            length += 1
            node = node.next
        
        n, remaining = divmod(length, k)
        
        # split the linked list
        res, curr = [], root
        
        for i in range(k):
            head = curr
            for _ in range(n + (i < remaining) - 1):
                if curr: curr = curr.next
            if curr:
                curr.next, curr = None, curr.next
            res.append(head)
        return res