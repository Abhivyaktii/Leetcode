/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    function findAncestors(root, target) {
        if (root === null) {
            return null;
        }

        if (root === target) {
            return [root]; 
        }

        const leftAncestors = findAncestors(root.left, target);
        const rightAncestors = findAncestors(root.right, target);

        if (leftAncestors) {
            return [root, ...leftAncestors];
        } else if (rightAncestors) {
            return [root, ...rightAncestors];
        }

        return null;
    }

    let ancestorsP = findAncestors(root, p);
    let ancestorsQ = findAncestors(root, q);

    console.log("Ancestors of P:", ancestorsP.map(node => node.val)); // Debugging
    console.log("Ancestors of Q:", ancestorsQ.map(node => node.val)); // Debugging

    let i = 0;
    while (i < ancestorsP.length && i < ancestorsQ.length && ancestorsP[i] === ancestorsQ[i]) {
        i++;
    }

    return ancestorsP[i - 1]; 
};
