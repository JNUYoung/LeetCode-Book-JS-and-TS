/**
 * 剑指offer46.把数字翻译成字符串
 * 
 * 翻译规则：数字0-25分别对应小写字母a-z
 * 
 * 
 */

const translateNum = function(num) {
    num = num.toString()
    const dp = new Array(num.length + 1)
    dp[0] = 1
    dp[1] = 1
    for (let i = 2; i < dp.length; i++) {
        const tmp = parseInt(num.slice(i - 2, i))
        if (tmp >= 10 && tmp <= 25) {
            dp[i] = dp[i - 1] + dp[i - 2]    // 相当于既可以从i-2跳两格到i，也可以从i-1跳两格到i
        } else {
            dp[i] = dp[i - 1]    // 只能从i-1跳1格到i
        }
    }
    console.log(dp);
    return dp.at(-1)
}

console.log(translateNum(12258));