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
    
    // Step 1: Determine if there is a cycle
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        
        if (fast === slow) {
            // Cycle detected
            let entry = head;
            // Step 2: Find the entry point of the cycle
            while (entry !== slow) {
                entry = entry.next;
                slow = slow.next;
            }
            return entry;
        }
    }
    
    return null; // No cycle
};
