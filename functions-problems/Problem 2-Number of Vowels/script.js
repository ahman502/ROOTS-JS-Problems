function howManyVowels(sampleString) {                                    // function with string as a parameter        
  let vowelCounter = 0;                                                   // counter to count how many vowels in the sample string
  
  if(!sampleString || typeof sampleString !== 'string') {                 // condition to check if an argument is not given or teh argument is not of the string datatype
    return "Input either empty or not a string";                          // if condition is true, we give this output 
  }

  let lowerCaseString = sampleString.toLowerCase();                       // converting sample string to lower case letters for vowel comparison
  let trimmedString = lowerCaseString.replace(/[^a-zA-Z]/g, "");          // now, I trim the argument string so it doesn't contain special characters, spaces, and digits   
  
  if(trimmedString.length === 0) {                                        // if condition to check if the length of the sample string after trimming is 0  
      return "Input either empty or not a string";                        // if the length is 0, we return this statement
  }

  else {                                                                  // if the length of sample string after trimming it is > 0, we run the statements below
    console.log('Sample string: ' + sampleString);                        // print the sample string first            

    for(i = 0; i < trimmedString.length; i++) {                           // for loop to go over each letter in trimmed sample string
      
      if(trimmedString[i] === 'a' || trimmedString[i] === 'e' ||          // checking if the letter at index iis equal to any of the vowels
         trimmedString[i] === 'i' || trimmedString[i] === 'o' || 
         trimmedString[i] === 'u') {
        
          vowelCounter++;                                                 // if there is a vowel in the sample string, I add 1 to the vowel counter 
      }
    }

    return "Number of vowels in string: " + vowelCounter;                 // returning the number in vowelCounter variable
  }

}

console.log(howManyVowels());
console.log(howManyVowels(123));
console.log(howManyVowels('2223 !!!!!'));
console.log(howManyVowels('     What a lovely day!'));
console.log(howManyVowels(''));
console.log(howManyVowels('2223Wolly sang a sOng EEUa!'));
    

/* OUTPUT 

"Input either empty or not a string"               // 1st function call

"Input either empty or not a string"               // 2nd function call

"Input either empty or not a string"               // 3rd function call

"Sample string:      What a lovely day!"           // 4th function call
"Number of vowels in string: 5"

"Input either empty or not a string"               // 5th function call

"Sample string: 2223Wolly sang a sOng EEUa!"       // 6th function call
"Number of vowels in string: 8"

*/