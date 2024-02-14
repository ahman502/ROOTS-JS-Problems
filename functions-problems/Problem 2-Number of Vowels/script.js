function howManyVowels(sampleString) {
    let singleLetters = [];
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let vowelCounter = 0;
    let trimmedString = sampleString.replace(/[^a-zA-Z]/g, "");;
   
    if(trimmedString.length === 0) {                   
        return "Input either empty or not a string";      
    }
  
    if(sampleString && sampleString.length > 0 && typeof sampleString === 'string') {
      console.log('Sample string: ' + sampleString);
  
      for(i = 0; i < sampleString.length; i++) {
        singleLetters.push(sampleString[i]);
      }
  
      for(j = 0; j < singleLetters.length; j++) {
        for(k = 0; k < vowels.length; k++) {
          if(singleLetters[j] === vowels[k]) {
            vowelCounter++;
          }
         }
      }
      return "Number of vowels in string: " + vowelCounter;
    }
  
    else {
      return "Input either empty or not a string";
    }

}

console.log(howManyVowels('Hello World!'));
console.log(howManyVowels('2223 !!!!!'));
console.log(howManyVowels('     What a lovely day!'));
console.log(howManyVowels(''));
console.log(howManyVowels('2223Wolly sang a song!'));


/* OUTPUT 

"Sample string: Hello World!"                   // first function call
"Number of vowels in string: 3"

"Input either empty or not a string"           // second function call

"Sample string:      What a lovely day!"       // third function call
"Number of vowels in string: 5"

"Input either empty or not a string"           // fourth function call

"Sample string: 2223Wolly sang a song!"        /// fifth function call
"Number of vowels in string: 4"

*/