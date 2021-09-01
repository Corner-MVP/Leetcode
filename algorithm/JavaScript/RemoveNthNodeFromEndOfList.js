// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const dummy = new ListNode(0, head);
    let fast = dummy, slow = dummy, pre = dummy;
    while (n - 1 > 0) {
      fast = fast.next;
      n -= 1;
    }

    while (fast.next) {
      fast = fast.next
      pre = slow
      slow = slow.next
    }

    pre.next = slow.next
    return dummy.next
};