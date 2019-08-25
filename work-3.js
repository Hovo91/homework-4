function adjacentProductMax(string) {
  let toUpp = string.toUpperCase();
  let arrayOfString = toUpp.split(' ');
  let result = arrayOfString.map((item) => [item[0]]).join('');
  return result;
}

console.log(adjacentProductMax('Prisoner of War'));
