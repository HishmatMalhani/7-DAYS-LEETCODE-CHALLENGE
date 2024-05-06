/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

/**
 * Removes nodes from the linked list based on the condition specified.
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeNodes = function(head) {
    let stack = [];
    let current = head;
    
    // Traverse from the head to the end, and use the stack to filter nodes
    while (current !== null) {
        while (stack.length > 0 && stack[stack.length - 1].val < current.val) {
            stack.pop(); // Pop all elements smaller than the current node
        }
        stack.push(current);
        current = current.next;
    }

    // Reconstruct the list with the remaining nodes in the stack
    let dummy = new ListNode(0);
    let node = dummy;
    for (let i = 0; i < stack.length; i++) {
        node.next = new ListNode(stack[i].val);
        node = node.next;
    }
    node.next = null;

    return dummy.next;
};
