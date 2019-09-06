// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

function adjacentProductMax(array, newArray = []) {
  let result = array.slice(0, 2);
  newArray.push(result.reduce((product, item) => product * item));
  array.shift();
  array.length === 1 ? newArray : adjacentProductMax(array, newArray);
  return Math.max(...newArray);
}

console.log(adjacentProductMax([4, 2, 300, 3, 4, 5, 8, 90]));
