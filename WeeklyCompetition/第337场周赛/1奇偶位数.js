/**
 * 给定一个正整数n
 * 用even表示在n的二进制形式中值为1的偶数下标的个数
 * 用odd表示在n的二进制形式中值为1的奇数下标的个数
 * 返回整数数组[even, odd]
 */

var evenOddBit = function(n) {
    const binaryString = n.toString(2)
    let evenCount = 0, oddCount = 0
    const len = binaryString.length
    for (let i = 0; i < binaryString.length; i++) {
        if (binaryString[len - i - 1] === '1') {
            if (i % 2 === 0 || i === 0) evenCount+=1
            else oddCount+=1
        }
    }
    return [evenCount, oddCount]
};

console.log(evenOddBit(17))
console.log(evenOddBit(2))


/**
 * 不断取n的二进制的最低位，然后右移
 */
var evenOddBit = function(n) {
    const ans = [0, 0]  // 偶数下标数，奇数下标数
    let i = 0
    while (n) {
        ans[i] += n & 1
        n >>= 1   
        i ^= 1
    }
    return ans
}


/**
 * 
- ans数组第一项表示偶数索引的数目，第二项表示奇数索引的数目
- n&1判断n的第0位为1还是0，若为1则结果为1，若为0则结果为0
- n>>=1让数值n的二进制表示整体右移1位，相当于让原来的第1位变成第0位；
- i^=1，若当前i为偶数，那么相当于i++，若当前i为奇数，相当于i--，所以i不断地在0和1之间交替变更，使用i来表示当前bit是奇数索引还是偶数索引
 */