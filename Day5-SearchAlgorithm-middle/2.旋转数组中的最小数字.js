const minArray = nums => {
    let flag = false
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i + 1] < nums[i]) {
            flag = true
            return nums[i + 1]
        }
    }
    if (!flag) return nums[0]
}