class MyCQueue {
    private mainStack: number[] = []    // private修饰符表示该属性是私有的，不能在该类的声明的外部访问
    private auxStack: number[] = []

    public appendTail(value: number): void {
        this.mainStack.push(value)
    }

    public deleteHead(): number {
        if (this.mainStack.length === 0) return -1
        while (this.mainStack.length > 1) {
            this.auxStack.push(<number>this.mainStack.pop())
        }
        const ans = this.mainStack.pop()
        while (this.auxStack.length) {
            this.mainStack.push(<number>this.auxStack.pop())
        }
        return <number>ans
    }
}