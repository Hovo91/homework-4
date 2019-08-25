function adjacentProductMax(array, newArray = []) {
  let result = array.slice(0, 2);
  newArray.push(result.reduce((product, item) => product * item));
  array.shift();
  array.length === 1 ? newArray : adjacentProductMax(array, newArray);
  newArray.sort((a, b) => a - b);
  return newArray[newArray.length - 1];
}

console.log(adjacentProductMax([4, 2, 300, 3, 4, 5, 8, 90]));
