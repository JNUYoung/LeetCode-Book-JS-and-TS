function ListNode(val) {
    this.val = val === undefined ? 0 : val
    this.next = null
}

const mergeTwoLists = function(l1, l2) {
    const dummyHead = new ListNode()
    let pre = dummyHead

    while (l1 && l2) {
        if (l1.val <= l2.val) {
            pre.next = l1
            l1 = l1.next
        } else {
            pre.next = l2
            l2 = l2.next
        }
        pre = pre.next
    }
    // ES2020新增的null判断符（逻辑运算符），运算符左侧的值为null或者undefined时，才会返回右侧的默认值
    pre.next = l1 ?? l2
    return dummyHead.next
}


/**
 * 多个逻辑运算符一起使用时，必须用括号表明优先级，否则就会报错
 */