function checkInt(val) {
  return typeof val === 'number';
}

function compareInts(value1, value2) {
  return value2 - value1;
}

function bigToSmall(arr) {
  if(Array.isArray(arr) && arr.every(checkInt)) {
    arr.sort(compareInts);
    return arr;
  }
  else {
    return 'Not an array. Try again!';
  }
}

console.log(bigToSmall(['Sam', 2, 3, 5]));
console.log(bigToSmall());
console.log(bigToSmall([56, 10, 62, 1, 22, 45, 91, 2, 34, 11, 3, 26, 55]));


/*          OUTPUT 

"Not an array. Try again!"
"Not an array. Try again!"
[91, 62, 56, 55, 45, 34, 26, 22, 11, 10, 3, 2, 1]

*/
