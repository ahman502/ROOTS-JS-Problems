function testString(sampleString) {    //creating a function that takes a test string as an argument
  
  /* the if statment checks if the sample string passed in exists, 
  has a length greater than 0 (it can not be a string with just spaces), 
  and it checks if a datatype of the argument is a String (ex. Numbers are not 
  words even if written within quotation marks so this statements checks 
  if the string is an actual word with only letters)*/

  if(sampleString && sampleString.length > 0 && typeof sampleString === 'string'){
    let longestWord = 0;                // this is the variable that will hold the number that equals the length of the longest word within our argument
    let trimmedWord;              // this variable will hold the trimmed string that does not contain any digits or special characters (pure words/letters only)
    let splitString = sampleString.split(" "); // we spilt our argument string by a space
    
    // for loop to loop through our split string's words
    for(i = 0; i < splitString.length; i++) {

      /* below, I go through each letter in each word of our argument string. 
      If there is a special character or a number in the word, I replace it with
      an empty string so we can have pure words/just letters*/
      trimmedWord = splitString[i].replace(/[^a-zA-Z]/g, "");   

      // below I check if the length of the trimmed string (just letters) is bigger than the longest word which is initially set to 0 above
      if(trimmedWord.length > longestWord) {

        // if the length of the trimmed word it longer, it becomes the longest word
        longestWord = trimmedWord.length;
      }
    }

    /* out of the for loop, I check if the trimmed string's length is > 0. 
    I check this because after trimming a string that contains only numbers 
    (see function call 5 and its output), the length of the string becomes 
    0 which makes it an empty string */
    if(trimmedWord.length > 0) {

      // if the lenght of the trimmed string is > 0, I return the length of our longest word in the string
      return 'The longest word is of length ' + longestWord;
    }

    // otherwise if the length is 0, I return the statement below
    else {
      return "Input either empty, not the right type or not a word";
    }   
  }

  /* this else statment correponds to the first if statment. 
  This statment checks if an string argument is not provided, 
  its length is equal to 0 and if it is any other datatype besides 
  the String datatype (which should be the only acceptable datatype 
  as we are looking to find the length of the longest word in a given 
  statement)*/
  else {
    return "Input either empty, not the right type or not a word";
  }
}

// calling my function below with different inputs
console.log(testString());
console.log(testString(2445)); 
console.log(testString("     "));
console.log(testString(""));
console.log(testString("2445"));    // function call 5
console.log(testString("H111oooooow are you doinggg!!")); 
console.log(testString("How old 34areeee yo#u")); 


/* Output of the function calls above

"Input either empty, not the right type or not a word"
"Input either empty, not the right type or not a word"
"Input either empty, not the right type or not a word"
"Input either empty, not the right type or not a word"
"Input either empty, not the right type or not a word"        // result of function call 5
"The longest word is of length 8"
"The longest word is of length 6"

*/