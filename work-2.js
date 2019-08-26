// Given an array of integers.
// All numbers are unique. Find the count of missing numbers between minimum and maximum elements to make integers sequence.

function countOfMissingNumbers(array) {
  array.sort((a, b) => a - b);
  return array.pop() - array.length;
}

console.log(countOfMissingNumbers([5, 8, 9, 14, 15, 1, 0, 6, 3, 2, 4, 7]));
