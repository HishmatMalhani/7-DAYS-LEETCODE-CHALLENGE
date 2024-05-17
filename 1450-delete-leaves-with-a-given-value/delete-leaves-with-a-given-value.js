function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

var removeLeafNodes = function(root, target) {
    // Helper function to recursively remove target leaves
    function removeTargetLeaves(node) {
        if (node === null) {
            return null;
        }

        // Recursively process the left and right children
        node.left = removeTargetLeaves(node.left);
        node.right = removeTargetLeaves(node.right);

        // If this node is a leaf and its value is the target, remove it
        if (node.left === null && node.right === null && node.val === target) {
            return null;
        }

        return node;
    }

    // Start the recursive process from the root
    return removeTargetLeaves(root);
};
