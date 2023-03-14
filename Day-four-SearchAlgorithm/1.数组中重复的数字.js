/**
 * 数组中重复的数字
 */

var findRepeatNumber = function(nums) {
    const map = new Map()
    for (const num of nums) {
        if (!map.has(num)) map.set(num, 1)
        else return num
    }
};


var findRepeatNumber = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === i) continue
        if (nums[nums[i]] === nums[i]) return nums[i]
        const tmp = nums[i]
        nums[i] = nums[nums[i]]
        nums[nums[i]] = tmp
    }
}

console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]))