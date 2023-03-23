/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */

// 左指针指向前驱节点，右指针指向后继节点

var treeToDoublyList = function(root) {
    // ans存放中序遍历的结果
    const ans = []
    const midOrderTraversal = function(root) {
        if (root === null) return
        midOrderTraversal(root.left)
        ans.push(root)
        midOrderTraversal(root.right)
    }
    midOrderTraversal(root)
    if (ans.length === 0) return null
    // 修改right指针
    for (let i = 0; i < ans.length - 1; i++) {
        ans[i].right = ans[i + 1]
    }
    ans.at(-1).right = ans[0]

    // 修改left指针
    for (let i = ans.length - 1; i > 0; i--) {
        ans[i].left = ans[i - 1]
    }
    ans[0].left = ans.at(-1)

    return ans[0]
};