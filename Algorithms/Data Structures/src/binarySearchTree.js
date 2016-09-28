/*
BINARY SEARCH TREES

Abstract data type
A binary search tree is a tree with the additional constraints:
- each node has only two child nodes (node.left and node.right)
- all the values in the left subtree of a node are less than or equal to the value of the node
- all the values in the right subtree of a node are greater than the value of the node

*** Operations:

bsTree.insert(value)
=> bsTree (return for chaining purposes)
Insert value into correct position within tree

bsTree.contains(value)
=> true/false
Return true if value is in tree, false if not

bsTree.traverseDepthFirst_inOrder(callback)
=> undefined
Invoke the callback for every node in a depth-first in-order (visit left branch, then current node, than right branch)
Note: In-Order traversal is most common type for binary trees. For binary search tree, this visits the nodes in ascending order (hence the name).

bsTree.traverseDepthFirst_preOrder(callback)
=> undefined
Invoke the callback for every node in a depth-first pre-order (visits current node before its child nodes)

bsTree.traverseDepthFirst_postOrder(callback)
=> undefined
Invoke the callback for every node in a depth-first post-order (visit the current node after its child nodes)

bsTree.traverseBreadthFirst(callback)
=> undefined
Invoke the callback for every node in a breadth-first order

bsTree.checkIfFull()
=> true/false
A binary tree is full if every node has either zero or two children (no nodes have only one child)

bsTree.checkIfBalanced()
=> true/false
For this exercise, let's say that a tree is balanced if the minimum height and the maximum height differ by no more than 1. The height for a branch is the number of levels below the root.


*** Additional Exercises:
A binary search tree was created by iterating over an array and inserting each element into the tree. Given a binary search tree with no duplicates, how many different arrays would result in the creation of this tree.

*/
var BinarySearchTree = function(value){
  var newBinaryTree = {};
  newBinaryTree.left = null;
  newBinaryTree.right = null;
  newBinaryTree.value = value;
  _.extend(newBinaryTree, binaryTreeMethods);
  return newBinaryTree; 
};


var binaryTreeMethods = {};

binaryTreeMethods.insert = function(value){
  var findNodes = function(node) {
      if (value < node.value){
        if (node.left === null) {
          node.left = new BinarySearchTree(value);

        } else {
          findNodes(node.left);
        }
      } else if (value > node.value) {
          if (node.right === null) {
            node.right = new BinarySearchTree(value);
          } else {
            findNodes(node.right);
          }
      }
  }
  findNodes(this);
};


binaryTreeMethods.contains = function(value) {
    var result = false;
    var currentNode = this;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        result = true;
        return result;
      }
    } 
    return result;
};
// Time complexity:

binaryTreeMethods.traverseDepthFirst_inOrder = function(fn) {
  // implement me...
};
// Time complexity:

binaryTreeMethods.traverseDepthFirst_preOrder = function(fn) {
  // implement me...
};
// Time complexity:

binaryTreeMethods.traverseDepthFirst_postOrder = function(fn) {
  // implement me...
};
// Time complexity:

binaryTreeMethods.traverseBreadthFirst = function(fn) {
  // implement me...
};
// Time complexity:

binaryTreeMethods.checkIfFull = function() {
  // implement me...
};
// Time complexity:

binaryTreeMethods.checkIfBalanced = function() {
  // implement me...
};
// Time complexity:
