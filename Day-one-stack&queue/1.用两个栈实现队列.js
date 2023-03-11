/**
 * 剑指offer 09.用两个栈实现队列
 */

/**
 * mainStack：主栈，入队元素直接压入主栈；元素出队时先将主栈元素依次pop并push入辅助栈中，
 * 然后将栈顶元素弹出
 */

const CQueue = function() {
    this.mainStack = []
    this.auxStack = []
};

CQueue.prototype.appendTail = function(value) {
    this.mainStack.push(value)
};

CQueue.prototype.deleteHead = function() {
    if (this.mainStack.length === 0) return -1
    while (this.mainStack.length > 1) {
        this.auxStack.push(this.mainStack.pop())
    }
    const ans = this.mainStack.pop()
    while (this.auxStack.length) {
        this.mainStack.push(this.auxStack.pop())
    }
    return ans
};

const obj = new CQueue()
obj.appendTail(1)
obj.appendTail(2)
obj.appendTail(3)

obj.deleteHead()
console.log(obj)