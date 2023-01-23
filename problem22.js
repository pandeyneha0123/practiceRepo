//  Sum of Left Leaves

function sumOfLeftLeaves(root) {
    
    function traverse(node, isLeft) {
        if (node === null) return 0;
        
        if (!node.left && !node.right) return isLeft ? node.val : 0;
        
        return traverse(node.left, true) + traverse(node.right, false);
    }
    
    return traverse(root, false);
}