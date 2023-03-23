/**
 * 比较函数接收两个参数
 * 如果第一个参数应该排在第二个参数之前，就返回负值
 * 如果第一个参数应该排在第二个参数之后，就返回正值
 * 如果两个参数相等，就返回0
 */

function compare(a, b) {
    const ans1 = parseInt(a + b)
    const ans2 = parseInt(b + a)
    if (ans1 > ans2) {
        return 1
    } else {
        return -1
    }
}

var minNumber = function(nums) {
    const arr = nums.map(item => item.toString())
    arr.sort(compare)
    return arr.join('')
};

console.log(minNumber([3, 30, 34, 5, 9]))