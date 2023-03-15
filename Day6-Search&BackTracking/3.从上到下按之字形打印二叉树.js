function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
}

/**
 * ans数组为一个二维数组，每一行表示二叉树中每一层的遍历结果
 * 因此，ans已有的元素的个数 === 已经遍历了的二叉树的层数
 * 因此，根据ans.length的奇偶性来判断当前遍历的是奇数层还是偶数层
 */

var levelOrder = function(root) {
    const ans = []
    if (root === null) return []
    const queue = [root]
    while (queue.length > 0) {
        let curLen = queue.length
        const curAns = []
        while(curLen > 0) {
            const curNode = queue.shift()
            // 根据ans.length的奇偶性来判断当前遍历的是奇数层还是偶数层
            if (ans.length % 2 === 0) {
                curAns.push(curNode.val)
            } else {
                curAns.unshift(curNode.val)
            }
            curNode.left && queue.push(curNode.left)
            curNode.right && queue.push(curNode.right)
            curLen--
        }
        ans.push(curAns)
    }

    return ans
};