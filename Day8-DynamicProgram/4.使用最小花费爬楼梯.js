/**
 * 746. 使用最小花费爬楼梯
 */

/**
 * 动规五部曲：
 * 1.dp数组含义：
 *   - dp[i]表示爬到第i层时的最小花费
 * 2.递推公式：
 *   第i层只能由第i-1层和第i-2层爬一次到达，因此
 *   - dp[i] = min{dp[i-1]+cost[i-1], dp[i-2]+cost[i-2]}
 * 3.初始化dp数组：
 *   - 可以从下标0或下标1的台阶开始，则dp[0] = dp[1] = 0
 * 4.确定遍历顺序：
 *   - 从第2层开始，遍历到cost.length + 1[因为要爬到顶层，即爬完所有cost数组]
 */


var minCostClimbingStairs = function(cost) {
    const costLen = cost.length
    const dp = new Array(costLen + 1).fill(0)

    for (let i = 2; i < dp.length; i++) {
        dp[i] = Math.min(dp[i - 2] + cost[i - 2], dp[i - 1] + cost[i - 1])
    }

    return dp.at(-1)
};