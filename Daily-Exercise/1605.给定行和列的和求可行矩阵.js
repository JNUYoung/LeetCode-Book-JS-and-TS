var restoreMatrix = function(rowSum, colSum) {
    const rows = rowSum.length
    const cols = colSum.length
    const ans = new Array(rows).fill(0).map(() => new Array(cols).fill(0))
    console.log(ans)

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            ans[row][col] = Math.min(rowSum[row], colSum[col])
            rowSum[row] -= ans[row][col]
            colSum[col] -= ans[row][col]
        }
    }

    return ans
};

console.log(restoreMatrix([3, 8], [4, 7]))