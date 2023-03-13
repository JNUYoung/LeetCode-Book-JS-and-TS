// definition of linked list node

class MyNode {
    val: number
    next: MyNode | null
    random: MyNode | null
    constructor(val?: number, next?: MyNode, random?: MyNode) {
        this.val = val === undefined ? 0 : val
        this.next = next === undefined ? null : next
        this.random = random === undefined ? null : random
    }
}


function copyRandomList(head: MyNode | null): MyNode | null {
    if (head === null) return head
    const map = new Map()
    let cur = head

    while (cur) {
        map.set(cur, new MyNode(cur.val))
    }

    for (const [oldNode, newNode] of map.entries()) {
        if (oldNode.next) newNode.next = map.get(oldNode.next)
        if (oldNode.random) newNode.random = map.get(oldNode.random) 
    }

    return map.get(head)
}