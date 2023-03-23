/**
 * 给定一个m×n的二维字符网格board和一个字符串单词word
 * 如果word存在于网格中则返回true，否则返回false
 */

/**
 * 典型的矩阵搜索问题：
 * 
 * 1.深度优先搜索：
 *   - 可以理解为暴力法遍历矩阵中所有字符串的可能性，DFS通过递归先朝一个方向搜到底，
 *     再回溯至上一个节点，沿另一个方向搜索。
 * 2.剪枝：
 *   - 搜索过程中若当前路径不可能匹配成功，则立马返回false
 */

const exist = function(board, word) {
    const rows = board.length
    const cols = board[0].length
    /**
     * row: 当前遍历的节点的行索引
     * col：当前遍历的节点的列索引
     * k：当前将要匹配的word中的第k + 1个字符（k从0开始）
     */
    const dfs = function(row, col, k) {
        // 终止条件
        if (row < 0 || row >= rows || col < 0 || col >= cols || board[row][col] !== word[k]) {
            return false
        }
        // 此时找出了当前与第k个字符匹配的路径，判断是否全部匹配了
        if (k === word.length - 1) return true
        board[row][col] = ''    // 防止继续递归的时候往回走 例如 ABCBA
        const res = dfs(row - 1, col, k + 1) || dfs(row + 1, col, k + 1) || dfs(row, col - 1, k + 1) || dfs(row, col + 1, k + 1)
        board[row][col] = word[k]  // 因为k已经匹配成功了，所以k+1往回回溯时，要将之前修改为空的字符恢复
        return res 
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (dfs(i, j, 0)) return true
        }
    }

    return false
}

console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED"));
console.log(exist([["a","b"],["c","d"]], "abcd"));