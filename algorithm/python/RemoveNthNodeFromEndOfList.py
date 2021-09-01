# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def removeNthFromEnd(self, head, n):
        dummy = ListNode(0)
        dummy.next = head
        
        fast, slow, pre = dummy, dummy, dummy
        
        while n - 1:
            fast = fast.next
            n -= 1
        
        while fast.next:
            fast = fast.next
            pre = slow
            slow = slow.next
        
        pre.next = slow.next
        return dummy.next