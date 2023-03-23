/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function(root, k) {
    const ans = []
    function traversal(root) {
        if (root === null) return
        traversal(root.left)
        ans.push(root.val)
        traversal(root.right)
    }
    traversal(root)
    return ans.at(-k)
};