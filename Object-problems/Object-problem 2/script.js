const Brooklyn99Characters = [                                                                     // creating an array of objects
  {
    firstName: "Amy",
    lastName: "Santiago",
    age: 28
  },
  {
    firstName: "Jake",
    lastName: "Peralta",
    age: 32
  }, 
  {
    firstName: "Charles",
    lastName: "Boyle",
    age: 35
  }
];

function getNames(sampleArray) {                                                                   // function that takes an array as argument
  for(let i = 0; i < sampleArray.length; i++) {                                                    // iterating over the array
    console.log("Name: " + sampleArray[i]['firstName'] + " " + sampleArray[i]['lastName']);        // printing first and last names of each object within the array
  }
}

getNames(Brooklyn99Characters);                                                                    // calling the function with sample array


/*       OUTPUT

"Name: Amy Santiago"
"Name: Jake Peralta"
"Name: Charles Boyle"

*/
