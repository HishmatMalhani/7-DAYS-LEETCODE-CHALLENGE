/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var doubleIt = function(head) {
    // Reverse the linked list to process from the least significant digit
    head = reverse(head);
    const dummy = new ListNode();
    let cur = dummy;
    let carry = 0;

    // Process each node in the reversed list, doubling its value and managing carry
    while (head !== null) {
        let sum = head.val * 2 + carry; // Double the current node's value and add carry
        carry = Math.floor(sum / 10);   // Calculate new carry
        cur.next = new ListNode(sum % 10); // Create new node for the result list
        cur = cur.next;   // Move to the next node
        head = head.next; // Move to the next node in the original list
    }

    // If there's any remaining carry, add a new node at the end
    if (carry > 0) {
        cur.next = new ListNode(carry);
    }

    // Reverse the result list back to its original order
    return reverse(dummy.next);
};

/**
 * Helper function to reverse a linked list
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverse(head) {
    let prev = null;
    let current = head;
    while (current !== null) {
        let next = current.next; // Remember next node
        current.next = prev;     // Reverse current node's pointer
        prev = current;          // Move prev and current one step forward
        current = next;
    }
    return prev;
}
