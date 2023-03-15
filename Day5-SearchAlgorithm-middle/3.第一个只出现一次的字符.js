/**
es6的Map结构，插入顺序就是遍历顺序
 */
var firstUniqChar = function(s) {
    const map = new Map()
    for (const char of s) {
        map.set(char, map.has(char) ? map.get(char) + 1 : 1)
    }
    for (const [char, count] of map.entries()) {
        if (count === 1) return char
    }
    return ' '
};