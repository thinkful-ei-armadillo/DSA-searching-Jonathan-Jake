
const BinarySearchTree = require('./binary-search-tree');
const Queue = require('./queue');

function binarySearch(arr, value, start = 0, end = arr.length - 1) {
  
  if (start > end) {
    return -1;
  }
  
  let index = Math.floor((start + end) / 2);
  let item = arr[index];

  console.log(start, end);
  if (item === value) {
    return index;
  }
  else if (item < value) {
    return binarySearch(arr, value, index + 1, end);
  }
  else if (item > value) {
    return binarySearch(arr, value, start, index - 1);
  }
}


// 1. How many searches?

// 1a. 11, 5, 6, 8
// 1b. 11, 15, 17
