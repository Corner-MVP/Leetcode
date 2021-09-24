// Definition for a Node.
function Node(val,prev,next,child) {
  this.val = val;
  this.prev = prev;
  this.next = next;
  this.child = child;
}

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
    if (!head) return

    const dummy = new Node(0)
    dummy.next = head;
    dfs(dummy, head)
    dummy.next.prev = null
    return dummy.next
};

const dfs = (prev, curr) => {
  if (!curr) return prev

  curr.prev = prev;
  prev.next = curr;

  const tempNext = curr.next;
  const tail = dfs(curr, curr.child);
  curr.child = null;
  return dfs(tail, tempNext)

}