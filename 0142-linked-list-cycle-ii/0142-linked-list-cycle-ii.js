/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if (!head || !head.next) {
        return null;
    }
    
    let fast = head;
    let slow = head;
    
    // Step 1: Detect if there is a cycle
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        
        if (fast === slow) {
            // Cycle detected
            let pointer = head;
            
            // Step 2: Find the entry point of the cycle
            while (pointer !== slow) {
                pointer = pointer.next;
                slow = slow.next;
            }
            return slow;
        }
    }
    
    return null; // No cycle
};
