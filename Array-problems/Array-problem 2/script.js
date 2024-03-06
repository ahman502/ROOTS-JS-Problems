function joinItems(arr) {                                        // function declaration
  let finalArray;                                                // creating a variable to save the joined array
  
  if(Array.isArray(arr)) {                                       // checking if the argument is truly an array
    finalArray = arr.join(", ");                                 // if it is, I join the items using a commas and space separator
  }
  else {                                                         // if argument is not an array, I print this statement
    return 'Input given is not an array. Try again!';
  }
  return finalArray;                                             // finally, I return the finalArray variable containing the joined array
}

console.log(joinItems(["Red", "Green", "White", "Black"]));      // meets array criteria
console.log(joinItems('Hello', 'World'));                        // missing brackets
console.log(joinItems(1, 2, 3));                                 // missing brackets
console.log(joinItems([1, 2, 3, 4, 5]));                         // meets array criteria
console.log(joinItems());                                        // empty argument


/*       OUTPUT:

"Red, Green, White, Black"                                       => PRINTS JOINED ARRAY
"Input given is not an array. Try again!"
"Input given is not an array. Try again!"
"1, 2, 3, 4, 5"                                                  => PRINTS JOINED ARRAY
"Input given is not an array. Try again!"

*/
