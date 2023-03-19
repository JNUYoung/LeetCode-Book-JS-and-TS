// 空位置是0，障碍物是1

var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length
    const n = obstacleGrid[0].length
    const dp = new Array(m).fill(0).map(() => new Array(n).fill(0))

    // 初始化第一行，若第一行某一个位置有障碍物，则该行后面的格子都无法到达
    for (let j = 0; j < n; j++) {
        if (obstacleGrid[0][j] === 0) {
            dp[0][j] = 1
        }  else {
            while (j < n) {
                dp[0][j] = 0
            }
            break
        }
    }
    // 初始化第一列，若第一列某一个位置有障碍物，则该列后面的格子都无法到达
    for (let i = 0; i < m; i++) {
        if (obstacleGrid[i][0] === 0) {
            dp[i][0] = 1
        }  else {
            while (i < m) {
                dp[i][0] = 0
                i++
            }
            break
        }
    }

    // print dp
    console.log(dp);

    // 从（1，1）开始按行遍历，如果当前格子有障碍物，则dp[i][j] = 0
    // 设置为0，表示该格子无法到达右格子和下格子，仍然可以保持递推公式进行计算
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (obstacleGrid[i][j] === 1) {
                dp[i][j] = 0
                continue
            } else {
                dp[i][j] = dp[i-1][j] + dp[i][j-1]
            }
        }
    }

    return dp[m-1][n-1]
};


const o = [[0,0,0],[0,1,0],[0,0,0]]
console.log(uniquePathsWithObstacles(o));
console.log(uniquePathsWithObstacles([[0,0]]));