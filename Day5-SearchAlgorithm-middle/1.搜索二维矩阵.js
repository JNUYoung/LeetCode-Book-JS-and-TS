/**
 * 编写一个高效的算法来搜索m×n的矩阵matrix中的一个目标值target，
 *  - 矩阵每行元素从左到右升序排列
 *  - 矩阵每列元素从上到下升序排列
 */


/**
 * 按行进行二分查找，结合每行和每列的有序性，一些情况可以提前结束遍历该行
 * 
 * 某行第一个元素大于target，那么这一行及之后所有行都大于target
 * 某行最后一个元素小于target，那么直接跳过该行，在下一行进行查找
 */

var searchMatrix = function (matrix, target) {
    const rowNums = matrix.length
    const colNums = matrix[0].length

    for (const row of matrix) {
        if (row[0] > target) return false
        if (row[colNums - 1] < target) {
            continue
        }
        let left = 0, right = colNums - 1
        while (left <= right) {
            let mid = left + Math.floor((right - left) / 2)
            if (row[mid] < target) {
                left = mid + 1
            } else if (row[mid] > target) {
                right = mid - 1
            } else {
                return true
            }
        }
    }

    return false
}



/**
 * 解法二
 * 
 * 从矩阵右上角开始遍历，每次向左数字会变小，向下数字会变大。
 * 类似于将整个矩阵逆时针旋转45°，右上角元素相当于二叉搜索树的根节点
 */

var searchMatrix = function (matrix, target) {
    const rowNums = matrix.length
    const colNums = matrix[0].length

    let i = 0, j = colNums - 1
    while (i < rowNums && j >= 0) {
        if (matrix[i][j] === target) return true
        else if (matrix[i][j] < target) i += 1
        else j -= 1
    }

    return false
}


const matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]
console.log(searchMatrix(matrix, 5));