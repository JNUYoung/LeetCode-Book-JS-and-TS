function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
}


/**
 * 剑指offer26.树的子结构
 * 
 * 两颗二叉树A和B，判断B是否为A的子结构
 * 空树不是任意一个树的子结构
 */


/**
1.在A中找到跟B的根节点具有相同节点值的节点，记为Astart
2.判断以Astart为根节点的子树和二叉树B是否相同
3.若相同则返回true，若不同则从Astart继续向后遍历
 */

// 层序遍历二叉树，返回遍历的节点的数组
function levelOrder(root) {
    if (!root) return []
    const ans = []
    const queue = [root]
    while (queue.length > 0) {
        const curNode = queue.shift()
        curNode.left && queue.push(curNode.left)
        curNode.right && queue.push(curNode.right)
        ans.push(curNode)
    }
    return ans
}

// 在树A中找到与B的根节点的值相同的节点时
// 判断以该节点为根节点的子树是否包含B树
function isInclude(A, B) {
    if (!B) return true
    if (!A || A.val !== B.val) return false
    return isInclude(A.left, B.left) && isInclude(A.right, B.right)
}


const isSubStructure = function(A, B) {
    const ANodes = levelOrder(A)
    if (!B) return false  // B树为空时，不为任意树的子结构
    for (const ANode of ANodes) {
        if (ANode.val === B.val) {
            if (isInclude(ANode, B)) return true
        } else {
            continue
        }
    }
    return false
};