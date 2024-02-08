function testString(sampleString) {
  
  if(sampleString && sampleString.length > 0 && typeof sampleString === 'string'){
    let longestWord = 0;
    let finalWord;
    let splitString = sampleString.split(" ");
    
    for(i = 0; i < splitString.length; i++) {
      finalWord = splitString[i].replace(/[^a-zA-Z]/g, "");
      if(finalWord.length > longestWord) {
        longestWord = finalWord.length;
      }
    }
    if(finalWord.length > 0) {
      return 'The longest word is of length ' + longestWord;
    }
    else {
      return "Input either empty, not the right type or not a word";
    }   
  }
  else {
    return "Input either empty, not the right type or not a word";
  }
}

console.log(testString());
console.log(testString(2445)); 
console.log(testString(""));
console.log(testString("2445")); 
console.log(testString("H111oooooow are you doinggg!!")); 
console.log(testString("How old 34areeee yo#u"));