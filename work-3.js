// Convert a long phrase to its acronym.

function toAcronym (string) {
  let toUpp = string.toUpperCase();
  let arrayOfString = toUpp.split(' ');
  let result = arrayOfString.map((item) => [item[0]]).join('');
  return result;
}

console.log(toAcronym('Prisoner of War'));
