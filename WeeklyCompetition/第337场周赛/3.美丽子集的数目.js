/**
 * 给定一个由正整数组成的数组nums和一个正整数k
 * 
 * 如果nums的子集中，任意两个整数的绝对差均不等于k，则认为该子数组是一个美丽子集。
 * 返回数组nums中“非空”且“美丽”的子集数目。
 */


/**
 * 回溯
 */
var beautifulSubsets = function(nums, k) {
    const ans = []
    const path = []
    function judgeFunc(arr, k) {
        if (arr.length === 1) return true
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (Math.abs(arr[j] - arr[i]) === k) return false
            }
        }
        return true
    }
    function backtracking(nums, startIndex) {
        if (path.length > 0) {
            if (judgeFunc(path, k)) ans.push(path)
        }
        for (let i = startIndex; i < nums.length; i++) {
            path.push(nums[i])
            backtracking(nums, i + 1)
            path.pop()
        }
    }
    backtracking(nums, 0)
    return ans.length
};
console.log(beautifulSubsets([2, 4, 6], 2));
console.log(beautifulSubsets([1], 1));
console.log(beautifulSubsets([4,2,5,9,10,3], 1));
console.log(beautifulSubsets([57,33,26,76,14,67,24,90,72,37,30,83,12,44,87,16,19], 12));



/**
 * 动态规划
 */

