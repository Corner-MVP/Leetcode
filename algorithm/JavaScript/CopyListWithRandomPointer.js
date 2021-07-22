// Definition for a node
 function Node(val, next, random) {
     this.val = val;
     this.next = next;
     this.random = random;
 }
 
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if (head === null) return null

    // copy list
    let p1 = head
    while (p1) {
        const newNode = new Node(p1.val, p1.next, null)
        p1.next = newNode
        p1 = p1.next.next
    }

    // copy random
    p1 = head
    while (p1) {
        const random = p1.random
        p1.next.random = random !== null ? random.next : null
        p1 = p1.next.next
    }

    // split two list
    p1 = head
    let p2 = head.next
    let res = head.next

    while (p1 && p2) {
        p1.next = p1.next.next
        p2.next = p2.next !== null ? p2.next.next : null
        p1 = p1.next
        p2= p2.next
    }
    return res

};