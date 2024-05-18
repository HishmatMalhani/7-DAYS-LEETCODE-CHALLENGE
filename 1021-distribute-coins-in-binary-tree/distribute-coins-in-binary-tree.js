function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

var distributeCoins = function(root) {
    let moves = 0;

    // Helper function to perform post-order traversal
    function postOrder(node) {
        if (node === null) {
            return 0;
        }

        // Traverse left and right children
        let left = postOrder(node.left);
        let right = postOrder(node.right);

        // Calculate the total number of moves
        moves += Math.abs(left) + Math.abs(right);

        // Return the excess coins at this node
        return node.val + left + right - 1;
    }

    postOrder(root);
    return moves;
};
