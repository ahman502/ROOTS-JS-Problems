function letterCount(sampleString, letter) {                             // function declaration that accepts a string and a letter
    
    let letterCounter = 0;                                               // counter to count the occurences of the letter passed in as argument
    let lowerCaseLetter;                                                 // varaible declaration (will explain functionality below)
    let trimmedString;                                                   // varaible declaration (will explain functionality below)
    let finalString;                                                     // varaible declaration (will explain functionality below)
    
    if(!sampleString || !letter || sampleString.length === 0             // This condition checks if a string argument does not exist, a lettter
        || letter.length > 1 || typeof sampleString !== 'string'         // argument does not exist, the lenght of string argument is 0, if the lenght 
        || typeof letter !== 'string') {                                 // of letter argument is greater than 1, and finally, if either the letter 
      return "Please check your input and try again";                    // argument or the string argument are not of datatype string
    }                                                                    // if any of these conditions is true, we ask the user for the right input
    
    lowerCaseLetter = letter.toLowerCase();                              // changing the letter argument to lower case so both arguments have the same case
    trimmedString = sampleString.replace(/[^a-zA-Z]/g, "");              // replacing all the special characters and digits in the argument string with an empty string
    
    if(trimmedString.length === 0) {                                     // if after trimming the argument string, the length is 0, then there is no letter passed in 
      return "Please check your input and try again";                    // and we return this statenent
    }
    
    finalString = trimmedString.toLowerCase();                           // Now, I change the trimmed string (wihtout any special charcaters and digits) to lower case
                                                                          
    console.log("Input string: " + sampleString);                        // I print out the string argument passed into the function     
    console.log("Letter to search: " + letter);                          // I print out the letter argument passed into the function
    
    for(i = 0; i < finalString.length; i++) {                            // For loop to go over the finalstring argument (after applying trim and toLowerCase methods to it)
      if(finalString[i] === lowerCaseLetter) {                           // if a letter in the finalstring matched the lower case letter argument
        letterCounter++;                                                 // I add 1 to the letterCounter variable
      }
    }
    return "# of letter occurences: " + letterCounter;                   // finally, I return the # of letter's occurences in the string argument
}
  
console.log(letterCount('Hollywood BOLLYWOOD!', 'L'));
console.log(letterCount('Hollywood BOLLYWOOD!', 'LL'));
console.log(letterCount('     ', 'L'));
console.log(letterCount('Hollywood BOLLYWOOD!', 0));
console.log(letterCount(true, 'L'));
console.log(letterCount('true', 'L'));
console.log(letterCount(2, 'L'));
console.log(letterCount('Hollywood BOLLYWOOD!', 56));


/*    OUTPUT:

"Input string: Hollywood BOLLYWOOD!"         // 1st function call
"Letter to search: L"
"# of letter occurences: 4"

"Please check your input and try again"      // 2nd function call

"Please check your input and try again"      // 3rd function call

"Please check your input and try again"      // 4th function call

"Please check your input and try again"      // 5th function call

"Input string: true"                         // 6th function call
"Letter to search: L"
"# of letter occurences: 0"

"Please check your input and try again"      // 7th function call

"Please check your input and try again"      // 8th function call
  
*/