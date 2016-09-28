/*

HASH TABLE

Collection of key-value pairs.
Map keys to values for efficient lookup.
Use an array as the underlying data structure.
Hash table should have a size - this will be used by the hashing function to determine what index to map the key to.
A hashing function is used to map the key to an integer, which is the index that the value is to be stored at.
Since our hashing function might map multiple keys to the same integer, we have to deal with collisions by creating buckets at each index of the storage array. These buckets can be arrays or linked lists.


*** Note:

ES6 includes a Map data structure. It differs from the JavaScript object because the keys can be any value (not just strings like for objects), there is a size property, and there is a guaranteed order (the insertion order).

Hash tables are also referred to as hash mapse or dictionaries.


*** Operations:

myMap.set(key, value)
=> myMap object
Store the key-value pair in the storage array.
If the key already exists, replace stored value with new value.
Use the hashing function to map the key to an integer and store the value at the corresponding index.
Account for the possibility of collisions.

myMap.get(key)
=> value associated with key, or undefined if none

myMap.has(key)
=> true/false depending on if a value has been associated with the key

myMap.delete(key)
=> true if a value was associated with the key
=> false if a value was never associated with the key
Remove any value associated to the key

myMap.count()
=> integer number of key/value pairs in hash table

myMap.forEach(callbackFn)
=> no returned value
Invokes callback function once for each key-value pair in the hash table


*** Additional Exercises:

Resize the hash table:
- if the count becomes greater than 75% of the table size, double the table size and redistribute the key/value pairs
- if the count becomes less than 25% of the table size, cut the table size in half and redistribute the key/value pairs





*/

var LimitedArray = function(limit){
  var storage = [];

  var limitedArray = {};
  limitedArray.get = function(index){
    checkLimit(index);
    return storage[index];
  };
  limitedArray.set = function(index, value){
    checkLimit(index);
    storage[index] = value;
  };
  limitedArray.each = function(callback){
    for(var i = 0; i < storage.length; i++){
      callback(storage[i], i, storage);
    }
  };

  var checkLimit = function(index){
    if(typeof index !== 'number'){ throw new Error('setter requires a numeric index for its first argument'); }
    if(limit <= index){ throw new Error('Error trying to access an over-the-limit index'); }
  };

  return limitedArray;
};

//Hash function that I borrowed 
var getIndexBelowMaxForKey = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value){
   var i = getIndexBelowMaxForKey(key, this._limit); 
  
  if(this._storage.get(i) === undefined){ 
      this._storage.set(i, []);
  }
    this._storage.get(i).push(key, value); 
 };
 
 HashTable.prototype.retrieve = function(key){
   var i = getIndexBelowMaxForKey(key, this._limit);
    for(var j = 0; j < this._storage.get(i).length; j++){ 
      if(key === this._storage.get(i)[j]){ 
        return this._storage.get(i)[j + 1]; 
      }
    }

 
 };
 
HashTable.prototype.remove = function(key){
   var i = getIndexBelowMaxForKey(key, this._limit);
  this._storage.each(function(innerArray, j, limitedArrayStorage) { 
    if (i === j) { 
      
      for(var a = 0; a < innerArray.length; a++){ 
        if(key === innerArray[a]){  
          innerArray[a + 1] = null; 
        }
      }
    }
  });
 };


/*
*** Exercises:

1. Implement a hash table with a binary search tree.

2. Given two arrays with values, return the values that are present in both. Do this in linear time.

3. Implement a hash table using linked lists for collision-handling. Why might this be preferable to using arrays.

*/
