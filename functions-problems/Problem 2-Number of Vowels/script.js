function howManyVowels(sampleString) {                                       // function with string as a parameter
    let singleLetters = [];                                                  // initializing an empty array that'll hold each letter in the sample string
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];       // an array of vowels that we need to compare our single letters array with
    let vowelCounter = 0;                                                    // counter to count how many vowels in the sample string
    let trimmedString;                                                       // variable to hold sampleString without special characters, spaces, and digits
  
    if(!sampleString || typeof sampleString !== 'string') {                  // condition to check if an argument is not given or teh argument is not of the string datatype 
      return "Input either empty or not a string";                           // if condition is true, we give this output
    }
  
    trimmedString = sampleString.replace(/[^a-zA-Z]/g, "");                  // now, I trim the argument string so it doesn't contain special characters, spaces, and digits
    
    if(trimmedString.length === 0) {                                         // if condition to check if the length of the sample string after trimming is 0 
        return "Input either empty or not a string";                         // if the length is 0, we return this statement
    }
  
    if(trimmedString && trimmedString.length > 0) {                          // checking if the length of the trimmed string is greater than 0 and the string is provided
      console.log('Sample string: ' + sampleString);                         // then, we print the sample string first           
  
      for(i = 0; i < trimmedString.length; i++) {                            // Next, we loop through the trimmed string and push each letter to an array
        singleLetters.push(trimmedString[i]);                                // the array of these letters is called singleLetters
      }
  
      for(j = 0; j < singleLetters.length; j++) {                            // Now, I go through each single letter in the singleLetters array and compare it with each letter in the vowels array            
        for(k = 0; k < vowels.length; k++) {
          if(singleLetters[j] === vowels[k]) {                               // if a letter in the singleLetters array is stritcly same as a letter in vowels array
            vowelCounter++;                                                  // then we add 1 to the vowelCounter
          }
         }
      }
      return "Number of vowels in string: " + vowelCounter;                  // And, return the number in vowelCounter variable
    }

}

console.log(howManyVowels());
console.log(howManyVowels(123));
console.log(howManyVowels('2223 !!!!!'));
console.log(howManyVowels('     What a lovely day!'));
console.log(howManyVowels(''));
console.log(howManyVowels('2223Wolly sang a song!'));
    

/* OUTPUT 

"Input either empty or not a string"            // 1st function call

"Input either empty or not a string"            // 2nd function call

"Input either empty or not a string"            // 3rd function call

"Sample string:      What a lovely day!"        // 4th function call
"Number of vowels in string: 5"

"Input either empty or not a string"            // 5th function call

"Sample string: 2223Wolly sang a song!"         // 6th function call
"Number of vowels in string: 4"

*/