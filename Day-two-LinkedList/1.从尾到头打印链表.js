// 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）

function ListNode(val) {
    this.val = val
    this.next = null
}


const reversePrint = function(head) {
    const ans = []
    let cur = head
    while (cur) {
        ans.push(cur.val)
        cur = cur.next
    }
    ans.reverse()
    return ans
}


// 递归方法
const reversePrint1 = function(head) {
    const ans = []
    function recursive(head) {
        // 递归的终止条件，当遍历完所有节点时返回
        if (head == null) return
        recursive(head.next)
        // 当遍历到最后一个节点时，即cur.next === null时，将结果加入数组，此时的回溯的加入顺序即是逆序
        ans.push(head.val)
    }
    recursive(head)
    return ans
}

// one line code
const reversePrint2 = function(head) {
    return head === null ? [] : reversePrint2(head.next).concat(head.val)
}