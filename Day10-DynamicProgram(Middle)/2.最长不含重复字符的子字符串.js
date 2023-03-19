/**
 * slide window
 */


var lengthOfLongestSubstring = function(s) {
    let maxSubstringLen = 0
    let right = -1
    const slideWindow = new Set()
    if (s.length === 0) return 0

    // 不停地移动窗口的左边界，然后判断以当前左边界为起始的窗口的不包含重复子串的最大长度
    for (let left = 0; left < s.length; left++) {
        // 若当前左边界移动到了left，那么要将s[left-1]对应的元素从set中移除
        if (left > 0) {
            slideWindow.delete(s.charAt(left - 1))
        } 
        // 当left+1为重复字符串时跳出循环，此时left指向窗口最右边的元素，left指向窗口最左边的元素，长度为right-left+1
        while (right + 1 < s.length && !slideWindow.has(s[right + 1])) {
            slideWindow.add(s[right + 1])
            right++
        }
        maxSubstringLen = Math.max(maxSubstringLen, right - left + 1)
    }

    return maxSubstringLen
};