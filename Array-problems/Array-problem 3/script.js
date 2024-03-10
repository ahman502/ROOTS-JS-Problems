function checkInt(val) {                                                                  // helper function to check if an argument is a number datatype
  return typeof val === 'number';                                                         // return true if datatpe is a number
}

function compareInts(value1, value2) {                                                    // helper function to sort values in descending order 
  // if value2 - value1 is a negative number, I place value1 before value2
  // if value2 - value 1 is a positive number, I place value2 before value1
  // if both value1 & value2 are equal, no sorting is performed
  return value2 - value1;
}

function bigToSmall(arr) {                                                                // function to take an array and sort it in descending order
  if(Array.isArray(arr) && arr.every(checkInt)) {                                         // first I check if the argument array is an array and if every value in it is a number (using the helper function above)
    arr.sort(compareInts);                                                                // if the condition is met, I sort the array in descending order
    return arr;                                                                           // I return the sorted array
  }
  else {                                                                                  // if the argument array is not an array or does not only contain numbers, I return this message
    return 'Not an array. Try again!';
  }
}

console.log(bigToSmall(['Sam', 2, 3, 5]));                                                // contains string and numbers
console.log(bigToSmall());                                                                // empty argument 
console.log(bigToSmall([-3, 8, 7, 6, 5, -4, 3, 2, 1]));                                   
console.log(bigToSmall([56, 10, 62, 1, 22, 45, 91, 2, 34, 11, 3, 26, 55]));               


/*          OUTPUT 

"Not an array. Try again!"
"Not an array. Try again!"
[8, 7, 6, 5, 3, 2, 1, -3, -4]                                                            => PRINTS SORTED ARRAY IN DESCENDING ORDER
[91, 62, 56, 55, 45, 34, 26, 22, 11, 10, 3, 2, 1]                                        => PRINTS SORTED ARRAY IN DESCENDING ORDER

*/
