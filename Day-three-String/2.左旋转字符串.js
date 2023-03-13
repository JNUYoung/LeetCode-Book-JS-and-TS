/**
    1.先将整个字符串反转
    2.将反转后的字符串切割为[0, n - k]和[k, n]两个子串
    3.将两个子串再反转后进行拼接
 */

var reverseLeftWords = function(s, n) {
    var reverseString =  function(s) {
        return s.split('').reverse().join('')
    }
    s = reverseString(s)
    return reverseString(s.slice(0, s.length - n)) + reverseString(s.slice(n , -1))
};