function testString(sampleString) {    //creating a function that takes a test string as an argument

  if(sampleString && sampleString.length > 0 && typeof sampleString === 'string'){            // Check if the sample string passed in exists, has a length > 0, and it checks if a datatype of the argument is a String (ex. Numbers are not words even if entered within quotation marks so this statement checks
    let longestWord = "";                                         // this is the variable that will hold the longest word within our argument
    let trimmed;                                                  // this variable will hold the trimmed string that does not contain any digits or special characters (pure words/letters only)
    let splitString = sampleString.split(" ");                    // we spilt our argument string by a space
    
    for(i = 0; i < splitString.length; i++) {                     // for loop to loop through our split string's words
      trimmed = splitString[i].replace(/[^a-zA-Z]/g, "");         // the trimmed varibale holds the split argument that contains no digits or special characters
      
      if(trimmed.trim().length === 0) {                           // This condition is to check in case we only have spaces in our argument. 
        return "Input either empty, not the right type or not a word";      // If after trimming the argument we only have spaces, we return this statement
      }                            
      else if(trimmed.length > longestWord.length) {              // Check if the length of the trimmed string (just letters) is bigger than the longest word which is initially set to 0 above
        longestWord = trimmed;                                    // if the length of the trimmed word is longer, it becomes the longest word
      }
    }
    return 'The longest word is ' + longestWord;                  // finally we return the longest word in the argument
     
  }
  else {                                                              // This statment checks if an string argument is not provided, its length is equal to 0 and if it is any other datatype besides the 
    return "Input either empty, not the right type or not a word";    // String datatype (which should be the only acceptable datatype as we are looking to find the length of the longest word in a given statement)
  }
}

// Calling my function below with different inputs
console.log(testString());
console.log(testString(2445)); 
console.log(testString("     "));
console.log(testString(""));
console.log(testString("2445 233 226736"));    // function call 5
console.log(testString("H1oww ar3e youuuu doing??")); 
console.log(testString("How oldddddd 34ar yo#u"));


/* Output of the function calls above

"Input either empty, not the right type or not a word"
"Input either empty, not the right type or not a word"
"Input either empty, not the right type or not a word"
"Input either empty, not the right type or not a word"
"Input either empty, not the right type or not a word"          // result of function call 5
"The longest word is youuuu"
"The longest word is oldddddd"

*/