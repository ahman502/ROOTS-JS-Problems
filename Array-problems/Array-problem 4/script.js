let testArray = [1, 20, 1, 3, 5, 7, 4, 4, 2, 5, 3, 3, 20, 10, 4, 4, 10, 5, 6];              // sample array

function checkDupes(array) {                                                                // function to check for duplicates
  return array.filter(check);                                                               // Applying the filter method on array argument.
}                                                                                           // This statement returns an array of elements that pass the check in the filter method

// Passing the value (each item in the array) and index of each element to the check function
function check(val, index) { 
//   console.log("index of array: " + index + ", assigned index: " + testArray.indexOf(val));                => statement for debugging puposes only
  return testArray.indexOf(val) === index;                                                  // here I return true for all the values in the testArray that have that have the same index of a value as the index in the array
}                                                                                           // indexOf assigns an index to the first occurance of a number in the array and then checks if it's the same as the index of the array. 
                                                                                            // if the numbers are the same, it returns true to the checkDupes function, and we get our final array

console.log(checkDupes(testArray));                                                         // function call

/*     OUTPUT (with the debugging statement uncommented)

       indexes = [0, 1,  2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];           indecies of an array
     testArray = [1, 20, 1, 3, 5, 7, 4, 4, 2, 5, 3 , 3 , 20, 10, 4 , 4 , 10, 5 , 6 ];           actual array
  indexOf(val) = [0, 1 , -, 3, 4, 5, 6, -, 8, -, - , - , - , 13 ,- , - ,  -, - , 18];           "-" represents repeated numbers and skipped index

"index of array: 0, assigned index: 0"           => TRUE ✅, we are on index 0 of the array and the value in index 0 is 1 which is a first occurance so it gets assigned index 0 (using the indexOf method)
"index of array: 1, assigned index: 1"           => TRUE ✅, we are on index 1 of the array and the value in index 1 is 20 which is a first occurance so it gets assigned index 1 (using the indexOf method)
"index of array: 2, assigned index: 0"           => FALSE ❌, we are on index 2 of the array and the value in index 2 is 1 which is NOT the first occurance of 1 so we skip index 2 and remain at 0 (using the indexOf method)
"index of array: 3, assigned index: 3"           => TRUE ✅, apply same logic as above
"index of array: 4, assigned index: 4"           => TRUE ✅, apply same logic as above
"index of array: 5, assigned index: 5"           => TRUE ✅, apply same logic as above
"index of array: 6, assigned index: 6"           => TRUE ✅, apply same logic as above
"index of array: 7, assigned index: 6"           => FALSE ❌, apply same logic as above
"index of array: 8, assigned index: 8"           => TRUE ✅, apply same logic as above
"index of array: 9, assigned index: 4"           => FALSE ❌, apply same logic as above
"index of array: 10, assigned index: 3"          => FALSE ❌, apply same logic as above
"index of array: 11, assigned index: 3"          => FALSE ❌, apply same logic as above
"index of array: 12, assigned index: 1"          => FALSE ❌, apply same logic as above
"index of array: 13, assigned index: 13"         => TRUE ✅, apply same logic as above
"index of array: 14, assigned index: 6"          => FALSE ❌, apply same logic as above
"index of array: 15, assigned index: 6"          => FALSE ❌, apply same logic as above
"index of array: 16, assigned index: 13"         => FALSE ❌, apply same logic as above
"index of array: 17, assigned index: 4"          => FALSE ❌, apply same logic as above
"index of array: 18, assigned index: 18"         => TRUE ✅, apply same logic as above

[1, 20, 3, 5, 7, 4, 2, 10, 6]                    => All numbers in the array that returned a TRUE ✅ value above

*/
