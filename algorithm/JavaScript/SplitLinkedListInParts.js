/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
 var splitListToParts = function(head, k) {
  let length = 0, curr = head;
  while (curr) {
      length += 1;
      curr = curr.next;
  }
  
  let n = Math.floor(length / k), remaining = length % k;
  
  const res = []; 
  curr = head;
  
  for (let i = 0; i < k; i++) {
      const node = curr;
      const width = n + (i < remaining ? 1 : 0);
      for (let j = 1; j < width; j++) {
          if (curr) curr = curr.next;
      }
      if (curr) {
          const next = curr.next;
          curr.next = null;
          curr = next;
      }
      res.push(node);
  }
  
  return res
  
};