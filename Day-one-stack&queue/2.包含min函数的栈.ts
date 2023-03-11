class MinStack {
    private mainStack: number[] = []
    private auxStack: number[] = []

    push(x: number): void {
        this.mainStack.push(x)
        if (this.auxStack.length === 0 || this.auxStack[this.auxStack.length - 1] >= x) {
            this.auxStack.push(x)
        }
    }

    pop(): number {
        const ans: number = <number>this.mainStack.pop()
        if (ans === this.auxStack[this.auxStack.length - 1]) {
            this.auxStack.pop()
        }
        return ans
    }

    top(): number {
        return this.mainStack[this.mainStack.length - 1]
    }

    min(): number {
        return this.auxStack[this.auxStack.length - 1]
    }
}

