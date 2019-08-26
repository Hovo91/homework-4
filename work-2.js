// Given an array of integers.
// All numbers are unique. Find the count of missing numbers between minimum and maximum elements to make integers sequence.

function countOfMissingNumbers(array) {
  array.sort((a, b) => a - b);
  return array[array.length - 1] - array[0] - array.length + 1;
}

console.log(countOfMissingNumbers([-1, 2, -3, 6]));
