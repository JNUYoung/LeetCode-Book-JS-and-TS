var fib = function(n) {
    if (n <= 1) return n
    let prev = 0, cur = 1
    for (let i = 2; i <= n; i++) {
        const temp = (prev + cur) % (1e9+7)
        prev = cur
        cur = temp
    }
    return cur
}