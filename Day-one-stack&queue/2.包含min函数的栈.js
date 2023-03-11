/**
 * 剑指offer 30.包含min函数的栈
 */

/**
    主栈：存放入栈元素，实现push和pop功能
    辅助栈：按照从栈底到栈顶的非严格递减的顺序存放入栈元素，这样辅助栈顶的元素就是当前主栈中的最小元素，直接pop即可实现min
    【辅助栈是一个严格单调递减栈】
    【
    若要实现max函数呢？
    那么辅助栈从栈底到栈顶的元素需要保证非严格单调递增
    】
    
    例如：
    主栈推入元素依次为 9，10，7，3，5
    则辅助栈中的元素为 9，7，3

    push：mainStack.push(value)，若辅助栈为空，或当前元素小于等于辅助栈顶元素，则auxStack.push(value)
    pop: mainStack.pop()，若主栈弹出元素等于辅助栈栈顶元素，则auxStack.pop()
    min: auxStack[auxStack.length - 1]
    top: mainStack[mainStack.length - 1]
 */

const MinStack = function() {
    this.mainStack = []
    this.auxStack = []
};

MinStack.prototype.push = function(x) {
    this.mainStack.push(x)
    if (this.auxStack.length === 0 || this.auxStack[this.auxStack.length - 1] >= x) {
        this.auxStack.push(x)
    }
};

MinStack.prototype.pop = function() {
    const ans = this.mainStack.pop()
    if (this.auxStack[this.auxStack.length - 1] === ans) this.auxStack.pop()
    return ans
};

MinStack.prototype.top = function() {
    return this.mainStack[this.mainStack.length - 1]
};

MinStack.prototype.min = function() {
    return this.auxStack[this.auxStack.length - 1]
};