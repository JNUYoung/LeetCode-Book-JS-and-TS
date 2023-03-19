var uniquePaths = function(m, n) {
    const dp = new Array(m).fill(0).map(item => new Array(n).fill(0))
    // 初始化dp数组，第一行和第一列可全部初始化为1
    for (let j = 0; j < n; j++) dp[0][j] = 1
    for (let i = 0; i < m; i++) dp[i][0] = 1

    // 当前位置(i, j)只跟(i-1, j)和(i, j-1)有关，类似于二维爬楼梯，但每次只能爬1格
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }
    return dp[m - 1][n - 1]
};


console.log(uniquePaths(3, 7));