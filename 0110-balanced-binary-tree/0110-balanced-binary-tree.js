/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    const height = function(node) {
        if (node === null) return 0; 
        
        const leftHeight = height(node.left);  
        const rightHeight = height(node.right);  
        
        // Check if either subtree is unbalanced, or the height difference is > 1
        if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
            return -1;  // Return -1 to indicate the tree is unbalanced
        }
        
        return Math.max(leftHeight, rightHeight) + 1;
    };

    // If height returns -1, the tree is unbalanced
    return height(root) !== -1;
};
