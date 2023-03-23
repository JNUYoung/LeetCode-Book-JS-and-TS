var findJudge = function(n, trust) {
    // 法官的入度为n-1，出度为0, [a, b]表示从节点a指向节点b
    const matrix = new Array(n).fill(0).map(item => new Array(n).fill(0))
    for (const [a, b] of trust) {
        matrix[a - 1][b - 1] = 1
    }
    // 如果当前节点的出度为0且入度为n-1，则代表当前节点为法官
    for (let i = 0; i < n; i++) {
        if (matrix[i].reduce((prev, cur) => prev + cur, 0) === 0) {
            let count = 0
            for (let j = 0; j < n; j++) {
                count += matrix[j][i]
            }
            if (count === n - 1) return i + 1
        }
    }
    return -1
};

console.log(findJudge(2, [[1,2]]));
console.log(findJudge(3, [[1,3], [2,3]]));
console.log(findJudge(3, [[1,3], [2,3],[3,1]]));