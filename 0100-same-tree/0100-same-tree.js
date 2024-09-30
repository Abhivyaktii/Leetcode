/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(treeP, treeQ) {
    
    if(treeP === null && treeQ === null){
        return true
    }
    
     if(treeP === null || treeQ === null || treeP.val != treeQ.val){
        return false
    }
    
    return isSameTree(treeP.left, treeQ.left) && isSameTree(treeP.right, treeQ.right);
};