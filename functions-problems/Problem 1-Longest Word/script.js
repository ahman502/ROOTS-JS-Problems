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
        console.log('The longest word is of length ' + longestWord);
      }
      else {
        console.log("Input either empty, not the right type or not a word");
      }
      return;    
    }
  else {
    console.log("Input either empty, not the right type or not a word");
  }
}

testString(2445); 
testString("");
testString("2445"); 
testString("H111oooooow are you doinggg!!"); 
testString("How old 34areeee yo#u");