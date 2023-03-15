var levelOrder = function(root) {
    const ans = []
    if (root === null) return []
    const queue = [root]
    while (queue.length > 0) {
        let curLen = queue.length
        const curAns = []
        while(curLen > 0) {
            const curNode = queue.shift()
            curAns.push(curNode.val)
            curNode.left && queue.push(curNode.left)
            curNode.right && queue.push(curNode.right)
            curLen--
        }
        ans.push(curAns)
    }

    return ans
};