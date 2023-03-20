/**
 * 输入两个链表，找出他们的第一个公共节点
 */

// 利用哈希表存储A链表中的节点，空间复杂度为O(n)
var getIntersectionNode = function(headA, headB) {
    const map = new Map()
    while (headA) {
        map.set(headA, true)
        headA = headA.next
    }
    while (headB) {
        if (map.has(headB)) return headB
        headB = headB.next
    }
    return null
};


/**
 * 1.两个指针p1和p2分别指向headA，headB
 * 2.两个指针同时后移，p1遍历完链表A后，让p1指向headB；
 * 3.同理，p2遍历完链表B后，让p2指向headA；
 * 4.两个指针相遇时，指向的节点就是第一个公共节点
 */
var getIntersectionNode = function(headA, headB) {
    let p1 = headA, p2 = headB
    while (p1 !== p2) {
        p1 = p1 ? p1.next : headB   // 保证p1和p2都会经过null节点；假设p1指向A的最后一个节点时，此时p1不为null，所以p1会继续移动指向null；
        p2 = p2 ? p2.next : headA
    }
    return p1
};