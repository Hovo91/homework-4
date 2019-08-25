// Given a string of digits, output all the contiguous substrings of length n in that string.

function contiguousSubstrings(string, n, result = '') {
  result += string.substring(0, n) + ', ';
  let newString = string.substring(1);
  return newString.length > n - 1 ? contiguousSubstrings(newString, n, result) : result;
}

console.log(contiguousSubstrings('abcdfghz', 7));
