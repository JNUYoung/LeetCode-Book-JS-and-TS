var reverseWords = function(s) {
    s = s.trim().split(' ').filter(item => item.length > 0)
    console.log(s);
    let left = 0, right = s.length - 1
    while (left < right) {
        const tmp = s[left]
        s[left] = s[right]
        s[right] = tmp
        left++
        right--
    }
    return s.join(' ')
};

console.log(reverseWords("a good   example"));