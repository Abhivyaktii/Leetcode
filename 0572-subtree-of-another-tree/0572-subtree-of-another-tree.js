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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    if (subRoot === null) {
        return true;
    }
    if (root === null) {
        return false;
    }
    
    if (isSameTree(root, subRoot)) {
        return true;
    }
    
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

let isSameTree = function(tree1, tree2) {
    if (tree1 === null && tree2 === null) return true;
    if (tree1 === null || tree2 === null || tree1.val !== tree2.val) return false;
    return isSameTree(tree1.left, tree2.left) && isSameTree(tree1.right, tree2.right);
};
