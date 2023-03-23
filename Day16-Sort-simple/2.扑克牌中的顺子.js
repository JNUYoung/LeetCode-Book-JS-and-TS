/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function(nums) {
    const set = new Set()
    let max = -Infinity, min = Infinity
    for (const num of nums) {
        if (num === 0) continue
        if (set.has(num)) return false
        set.add(num)
        max = num > max ? num : max
        min = num < min ? num : min
    }
    return (max - min) < 5
}