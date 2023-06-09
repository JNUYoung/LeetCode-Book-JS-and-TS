function minCostClimbingStairs(cost: number[]): number {
    const dp: number[] = []
    const costLen = cost.length
    dp[0] = 0
    dp[1] = 1
    for (let i = 2; i <= costLen; i++) {
        dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
    }
    return dp[length];
}