function Node(val, next, random) {
    this.val = val
    this.next = next
    this.random = random
}

const node1 = new Node(7)
const node2 = new Node(13)
const node3 = new Node(11)
const node4 = new Node(10)
const node5 = new Node(1)
const nodeNull = new Node(null)

node1.next = node2
node1.random = nodeNull

node2.next = node3
node2.random = node1

node3.next = node4
node3.random = node5

node4.next = node5
node4.random = node3

node5.next = nodeNull
node5.random = node1



/**
 * 1.第一次遍历原链表，创建一个新链表，哈希表的key存储的是旧链表中的节点，value存储的是对应的新链表的节点
 * 2.遍历哈希表：
 *     key为旧节点，map.get(key)为对应的新节点
 *     map.get(key.next)对应新节点的next指针
 *     map.get(key.random)对应新节点的random指针
 */

const copyRandomList = function(head) {
    // key存储旧链表的节点，value存储新链表中的与旧链表节点对应的节点
    const map = new Map()
    
    // 将旧链表中的节点存储到map中
    let cur = head  // 遍历链表的指针
    while (cur) {
        map.set(cur, new Node(cur.val))
        cur = cur.next
    }

    for (const [key, value] of map.entries()) {
        if (key.next) value.next = map.get(key.next)
        if (key.random) value.random = map.get(key.random)
    }

    return map.get(head)
};

const newHead = copyRandomList(node1)
console.log(newHead)
console.log(newHead.next)
console.log(newHead.random)