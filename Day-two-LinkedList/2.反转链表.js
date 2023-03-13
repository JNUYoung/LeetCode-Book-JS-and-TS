/**
 * 输入链表的头节点，反转链表并输出反转后的链表的头节点
 */


// 双指针模拟方法，prev从null开始，cur从head开始
var reverseList = function(head) {
    let prev = null
    let cur = head
    while (cur) {
        let tmp = cur.next
        cur.next = prev
        prev = cur
        cur = tmp
    }
    return prev
};


// 递归
var reverseList = function(head) {
    // 递归函数的参数，prev表示当前遍历的节点的前驱节点，cur表示当前遍历的节点
    function recursive(cur, prev) {
        if (cur === null) return cur    // 当当前遍历节点为空时，返回结果
        const res = recursive(cur, cur.next)
        // 递归到终点时，从后往前回溯的过程中反转节点
        cur.next = prev
        return res
    }
}

