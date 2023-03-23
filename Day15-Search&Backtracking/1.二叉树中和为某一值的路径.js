/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * 找出从二叉树根节点到叶子节点路经总和为target的路径
 */


const pathSum = function(root, target) {
    const ans = []
    const path = []

    /**
     * @param {TreeNode} cur 
     * @param {number} curTarget
     * @return {number[][]} 
     */
    const traversal = function(cur, curTarget) {
        if (cur === null) return    // 若当前节点为空，则直接返回
        path.push(cur.val)
        curTarget -= cur.val

        // 满足条件，既为叶节点且target在遍历过程中递减为0，收集结果
        if (!cur.left && !cur.right && curTarget === 0) ans.push([...path])
        // 递归遍历左右节点
        traversal(cur.left, curTarget)
        traversal(cur.right, curTarget)
        path.pop()
    }

    traversal(root, target)
    return ans
}