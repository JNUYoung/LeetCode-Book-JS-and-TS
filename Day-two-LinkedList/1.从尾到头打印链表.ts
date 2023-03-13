class MyListNode {
    val: number
    next: MyListNode | null
    constructor(val?: number, next?: MyListNode | null) {
        this.val = val === undefined ? 0 : val
        this.next = next === undefined ? null : next
    }
}


const MyReversePrint = function(head: MyListNode | null): number[] {
    return head == null ? [] : MyReversePrint(head.next).concat(head.val)
}