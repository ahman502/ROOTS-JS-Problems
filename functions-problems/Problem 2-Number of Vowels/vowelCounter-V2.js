function howManyVowels(sampleString) {                                    // function with string as a parameter        
  let vowelCounter = 0;                                                   // counter to count how many vowels in the sample string
  let vowelArray = ['a', 'e', 'i', 'o', 'u'];
  
  if(!sampleString || typeof sampleString !== 'string') {                 // condition to check if an argument is not given or teh argument is not of the string datatype
    return "Input either empty or not a string";                          // if condition is true, we give this output   
  }

  let lowerCaseString = sampleString.toLowerCase();                       // converting sample string to lower case letters for vowel comparison
  let trimmedString = lowerCaseString.replace(/[^a-zA-Z]/g, "");          // now, I trim the argument string so it doesn't contain special characters, spaces, and digits   
  
  if(trimmedString.length === 0) {                                        // if condition to check if the length of the sample string after trimming is 0  
      return "Input either empty or not a string";                        // if the length is 0, we return this statement   
  }

  else {                                                                  // if the length of sample string after trimming it is > 0, we run the statements below
    console.log('Sample string: ' + sampleString); 
    
    let splitString = trimmedString.split(""); 
    
    for(let i = 0; i < splitString.length; i++) {
      if(vowelArray.includes(splitString[i])) {
        vowelCounter++;
      }
    }
    
  return vowelCounter;                                                    // returning the number in vowelCounter variable
  }
  
}

// function calls 

console.log(howManyVowels());
console.log(howManyVowels(123));
console.log(howManyVowels('2223 !!!!!'));
console.log(howManyVowels('     What a lovely day!'));
console.log(howManyVowels(''));
console.log(howManyVowels('2223Wolly sang a sOng EEUa!'));


/*     OUTPUT
  
"Input either empty or not a string"

"Input either empty or not a string"

"Input either empty or not a string"

"Sample string:      What a lovely day!"
5

"Input either empty or not a string"

"Sample string: 2223Wolly sang a sOng EEUa!"
8
  
*/