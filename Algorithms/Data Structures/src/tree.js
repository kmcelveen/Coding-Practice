/*
TREES

Abstract data type

General Tree:
A tree has a root node.
The root node has 0 or more children.
Each child node has 0 or more children.
(each node in the tree can be seen as a subtree)

Constraints:
A child has only one parent and the root node has no parent.
Note: A tree is a special type of graph. A tree is a graph without cycles.

*** Operations:

tree.addChild(value)
=> child node (new tree)
add child to tree/subtree and return child node (which should be a tree instance)

tree.contains(value)
=> true/false
Return true if value is in tree, false if not

tree.traverseDepthFirst(callback)
=> undefined
Invoke the callback for every node in a depth-first order

tree.traverseBreadthFirst(callback)
=> undefined
Invoke the callback for every node in a breadth-first order

*** Additional Exercises:
Given treeA and treeB, check if treeB is a subtree of treeA (meaning that there exists a node n in treeA such that the subtree of n is identical to treeB).

Given a dictionary, create a prefix tree (commonly known as a trie)
https://en.wikipedia.org/wiki/Trie

*/

var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  newTree.addChild = treeMethods.addChild;  
  newTree.contains = treeMethods.contains;

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  //this.value = {value: value};
  this.children.push(new Tree(value));
  //this.children.push(this.value);


};

// this function checks tree for matching target value
treeMethods.contains = function(target){
  // base case - return true if target = value
  var isFound = false; // flag variable, should be verb
  if(target === this.value){
    isFound = true;
  } else {
  // recursive case
  // if (this.children.length > 0){
    // run contains function on all objects in children array
    for (var i = 0; i < this.children.length; i++) {
      //console.log("children obj:",this.children[i],"children value:", this.children);
      if (this.children[i].contains(target)) {
        isFound = true;
        return isFound;
      }
    }
  }
  // }
  return isFound;


};



treeMethods.traverseDepthFirst = function(fn) {
  // implement me...
};
// Time complexity:

treeMethods.traverseBreadthFirst = function(fn) {
  // implement me...
};
// Time complexity:
