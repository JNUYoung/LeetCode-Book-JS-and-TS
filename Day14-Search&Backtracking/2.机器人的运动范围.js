// 计算坐标(x, y)的数位之和
function calcSum(x, y) {
    x = x.toString().split('').reduce((prev, cur) => parseInt(prev) + parseInt(cur), 0)
    y = y.toString().split('').reduce((prev, cur) => parseInt(prev) + parseInt(cur), 0)
    return x + y
}

/**
 * BFS
 * 向右和向下遍历
 */
const movingCount = function(m, n, k) {
    if (k === 0) return 1  // 只有[0, 0]满足条件
    const queue = [[0, 0]]
    const set = new Set()

    while (queue.length > 0) {
        const [x, y] = queue.shift()
        if (x >= 0 && x < m && y >= 0 && y < n && calcSum(x, y) <= k && !set.has(`${x},${y}`)) {
            set.add(`${x},${y}`)
        }
        if (x + 1 < m && y < n) {
            queue.push([x + 1, y])
        }
        if (x < m && y + 1 < n) {
            queue.push([x, y + 1])
        }
    }
    console.log(set);
    console.log(queue);
    return set.size
}

// console.log(movingCount(2, 3, 1))
// console.log(movingCount(3, 1, 0))
// console.log(movingCount(1, 2, 1))
console.log(movingCount(3, 2, 17))
console.log(movingCount(16, 8, 4))