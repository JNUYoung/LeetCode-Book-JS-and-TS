/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function(head, val) {
    let virtualHead = new ListNode()
    virtualHead.next = head
    let pre = virtualHead, cur = head

    while (cur) {
        if (cur.val === val) {
            cur = cur.next
            pre.next = cur
        } else {
            pre = pre.next
            cur = cur.next
        }
    }

    return virtualHead.next
};