function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function (root) {
    const ans = []
    const queue = []
    if (root === null) return ans
    queue.push(root)

    while (queue.length > 0) {
        const curNode = queue.shift()
        ans.push(curNode.val)
        curNode.left && queue.push(curNode.left)
        curNode.right && queue.push(curNode.right)
    }

    return ans
};