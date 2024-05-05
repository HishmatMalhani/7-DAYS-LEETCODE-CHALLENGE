/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * Deletes a node from the linked list. It does not return anything.
 * You are given access to the node to be deleted directly.
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    if (node === null || node.next === null) {
        throw new Error("The node to be deleted is null or the last node, which is not allowed.");
    }

    node.val = node.next.val;  // Copy the value from the next node to the current node
    node.next = node.next.next; // Skip the next node in the list
};

// Example usage:
let head = new ListNode(4);
let node1 = new ListNode(5);
let node2 = new ListNode(1);
let node3 = new ListNode(9);

head.next = node1;
node1.next = node2;
node2.next = node3;

// Suppose we want to delete the node with value 5
deleteNode(node1);

// Now head should look like: 4 -> 1 -> 9
