# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def getIntersectionNode(self, headA, headB):
        
        if not headA or not headB: return
        
        pA, pB = headA, headB
        
        while pA != pB:
            
            pA = headB if not pA else pA.next
            pB = headA if not pB else pB.next
        
        return pA