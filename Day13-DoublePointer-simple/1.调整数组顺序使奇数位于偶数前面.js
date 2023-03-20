var exchange = function(nums) {
    let left = 0, right = nums.length - 1
    while (left < right) {
        while (((nums[left] & 1)  === 1) && left < right) {
            left++
        }
        while (((nums[right] & 1) === 0) && left < right) {
            right--
        }
        const tmp = nums[left]
        nums[left] = nums[right]
        nums[right] = tmp
        left++
        right--
    }
    return nums
};

console.log(exchange([1, 2, 3, 4]));