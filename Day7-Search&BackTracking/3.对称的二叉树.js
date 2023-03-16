/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    // 判断root.left和root.right是否对称
    function compare(left, right) {
        if ((!left&&right) || (left&&!right)) return false  // 如果左右子树一个为空，一个不为空
        else if (!left && !right) return true  // 左右子树都为空
        else if (left.val !== right.val) return false  // 左右都不为空，但值不相同
        
        // 左右均不为空，且值相等，递归判断：
        // 1.左子节点的左子节点和右子节点的右子节点
        // 2.左子节点的右子节点和右子节点的左子节点
        const outsideCompare = compare(left.left, right.right)
        const insideCompare = compare(left.right, right.left)
        return insideCompare && outsideCompare
    }
    if (!root) return true
    return compare(root.left, root.right)
};