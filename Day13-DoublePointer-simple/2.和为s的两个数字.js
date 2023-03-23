/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let left = 0, right = nums.length - 1
    while (left < right) {
        const tmp = nums[left] + nums[right]
        if (tmp < target) {
            left++
        } else if (tmp > target) {
            right--
        } else {
            return [nums[left], nums[right]]
        }
    }
}; 