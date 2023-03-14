/**
 * 剑指offer53.在排序数组中查找数字
 */

var search = function(nums, target) {
    let count = 0
    nums.forEach((item) => item === target ? count+=1 : count += 0)
    return count
};

/**
 * 二分法：
 * 使用二分法找到左边界left和右边界right
 * 则数组中等于target的元素数目为right-left+1
 */


console.log(search([5,7,7,8,8,10], 8))
console.log(search([5,7,7,8,8,10], 6))