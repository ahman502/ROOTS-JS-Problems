const sampleObject =                           // creating sample object with only 3 keys
  {
    item1: "Milk",
    item2: "Sugar",
    item3: "Rice"
  };
  
function getLength(obj) {                      // function that accepts object as argument     
  if(typeof obj !== 'object') {                // checking if the arguments type is an object
    return "Please use object input";          // if type is not an object, I print this
  }
  else {                                       // if type is object, I get the keys of the object as an array and return the length of that array
    return Object.keys(obj).length;
  }
}

console.log(getLength(sampleObject));          // function call with object as argument
console.log(getLength(27));                    // function call with number as argument


/*   OUTPUT    

3                                              => PRINTS THE LENGTH
"Please use object input"                      => gives an error message

*/
