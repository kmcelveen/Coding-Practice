/*
GRAPHS

Abstract data type

Basic Graph:
Stores nodes (represented by any primitive value) and the neighbors for each node. This implementation represents a graph as an adjacency list (https://en.wikipedia.org/wiki/Adjacency_list).

Here's an example:
1---2---3
 \ /
  4
graph = {
  1: [2, 4],
  2: [1, 3, 4],
  3: [2],
  4: [1, 2]
}

Constraints:
This graph implementation is undirected and can have unconnected nodes. The nodes are represented by unique primitive values.

*** Operations:
graph.addNode(value) // value must be a primitive
=> undefined
Add node to graph

graph.removeNode(value)
=> undefined
Remove node from graph

graph.contains(value)
=> true/false
Returns true if value is found in graph, false otherwise

graph.addEdge(value1, value2)
=> undefined
Create connection between two nodes if they're both present in the graph

graph.removeEdge(value1, value2)
=> undefined
Remove connection between two nodes

graph.hasEdge(value1, value2)
=> true/false
Returns true if edge exists, false otherwise

graph.forEach(callback)
=> undefined
Traverse the graph and invoke the passed callback once for each node. The callback function receives the following for each node: node value, node Neighbors, all nodes.

*** Nightmare mode:

Implement traversal methods for depth-first and breadth-first traversal. The methods take a starting node and a callback that gets invoked for each node. The callback should receive two arguments: the node value and the distance (number of edges that separate the node from the starting node). See example usage below.

graph.traverseDepthFirst(value1, callback)
=> undefined
Starting at the node with the value passed in, traverse the graph and invoke the callback for each node in a depth-first fashion.

graph.traverseBreadthFirst(value, callback)
=> undefined
Starting at the node with the value passed in, traverse the graph and invoke the callback for each node in a breadth-first fashion.

Example Usage:
1---2---3---5
 \ /
  4
{
  '1': [ 2, 4 ],
  '2': [ 1, 3, 4 ],
  '3': [ 2, 5 ],
  '4': [ 1, 2 ],
  '5': [ 3 ]
}

var traverseDF = [];
graph.traverseDepthFirst(1, function(val, distance) { traverseDF.push([val, distance]) });
traverseDF should be [ [ 1, 0 ], [ 2, 1 ], [ 3, 2 ], [ 5, 3 ], [ 4, 2 ] ]

var traverseBF = [];
graph.traverseBreadthFirst(1, function(val, distance) { traverseBF.push([val, distance]) });
traverseBF should be [ [ 1, 0 ], [ 2, 1 ], [ 4, 1 ], [ 3, 2 ], [ 5, 3 ] ]


*** Additional Exercises:

Given a directed graph and two nodes in the graph, write a function that indicates whether there is a route between the two nodes. Bonus: rather than returning a boolean, have your function return the shortest distance between the two nodes (the number of edges that separate them).

*/
var Graph = function(){
  this.nodes = [];
  this.edges = [];
};

Graph.prototype.addNode = function(node){
  this.nodes.push(node);
};

Graph.prototype.contains = function(node){
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i] === node) {
      return true;
    } else {
      return false;
    }
  }
};

Graph.prototype.removeNode = function(node){
  for (var i = 0; i < this.nodes.length; i++) {
    var temp = this.nodes[i];
    delete this.nodes[i];
    return temp;
  }
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  var result = false;
  for (var i = 0; i < this.edges.length; i++) {
    if (fromNode === this.edges[i][0] && toNode === this.edges[i][1]){
      result = true;
      return result;
    } else if (fromNode === this.edges[i][1] && toNode === this.edges[i][0]) {
      result = true;
      return result;
    } 
  }
  return result;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.edges.push([fromNode, toNode]);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var result = false;
  for (var i = 0; i < this.edges.length; i++) {
    if (fromNode === this.edges[i][0] && toNode === this.edges[i][1]){
      this.edges[i][1].slice(i, 1);
      result = true;
      return result;
    } else if (fromNode === this.edges[i][1] && toNode === this.edges[i][0]) {
      this.edges[i][1].slice(i, 1);
      result = true;
      return result;
    } 
  }
  return result;
};

Graph.prototype.forEach = function(cb){
  for (var i = 0; i < this.nodes.length; i++) {
    cb(this.nodes[i]);
  }
};


Graph.prototype.traverseDepthFirst = function(value, fn, visited, distance) {
  // implement me...
};
// Time complexity:

Graph.prototype.traverseBreadthFirst = function(value, fn) {
  // implement me...
};
// Time complexity:
