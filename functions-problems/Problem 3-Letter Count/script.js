function letterCount(sampleString, letter) {
    
    let letterCounter = 0;
    let lowerCaseLetter;
    let trimmedString;
    let finalString;
    
    if(!sampleString || !letter || sampleString.length === 0 
        || letter.length > 1 || typeof sampleString !== 'string' 
        || typeof letter !== 'string') {
      return "Please check your input and try again";
    }
    
    lowerCaseLetter = letter.toLowerCase();
    trimmedString = sampleString.replace(/[^a-zA-Z]/g, "");
    
    if(trimmedString.length === 0) {
      return "Please check your input and try again";
    }
    
    finalString = trimmedString.toLowerCase();
    
    console.log("Input string: " + sampleString);
    console.log("Letter to search: " + letter);
    
    for(i = 0; i < finalString.length; i++) {
      if(finalString[i] === lowerCaseLetter) {
        letterCounter++;
      }
    }
    return "# of letter occurences: " + letterCounter; 
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