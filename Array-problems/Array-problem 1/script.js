function printElements(arr, n) {                                                           // function declaration
     let finalArray = [];                                                                  // initializing a variable with empty array
     
     if(Array.isArray(arr) && typeof n === 'number' && n > 0 && n <= arr.length) {         // if statment to check if the argument array is actually an array, if n is actaully a number, n is > 0 and it is <= the length of the argumant array 
       for(i = 0; i < n; i++) {                                                            // if all above conditions are true, I go through the argument array starting from the 0th (1st element) to nth element (not including the nth element)
         finalArray.push(arr[i]);                                                          // I push each element in the index to the finalArray variable
       }
     }
     else {                                                                                // if any of the conditions in the if statement are false, I output this message
       return 'Check your input & try again!';
     }
     return finalArray;                                                                    // finally, I return the finalArray variable that holds the new array
}

console.log(printElements([15, 90, 26, 57, 19, 65, 81, 78], -3));                                                   // has a negative n value
console.log(printElements([15, 90, 26, 57, 19, 65, 81, 78], 8));                                                    // PRINTS ARRAY, n is exactly the length of the array 
console.log(printElements([15, 90, 26, 57, 19, 65, 81, 78], 10));                                                   // n is greater than the length of the array
console.log(printElements(['Sally', 'Josh', 'Megan', 'Ryan', 'Jacob', 'Leslie', 'Brian', 'Victoria'], 4));          // PRINTS ARRAY, n is less than the length of the array
console.log(printElements(['Sally', 'Josh', 'Megan'], 0));                                                          // n is 0
console.log(printElements(['Sally', 'Josh', 'Megan'], true));                                                       // n is not of a number datatype
console.log(printElements([], 0));                                                                                  // array is empty
console.log(printElements([], '2'));                                                                                // n is not of a number datatype + array is empty

/*         OUTPUT: 

"Check your input & try again!"
[15, 90, 26, 57, 19, 65, 81, 78]        => PRINTS ARRAY
"Check your input & try again!"
["Sally", "Josh", "Megan", "Ryan"]      => PRINTS ARRAY
"Check your input & try again!"
"Check your input & try again!"
"Check your input & try again!"
"Check your input & try again!"

*/
