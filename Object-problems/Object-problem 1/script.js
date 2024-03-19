const person = {                                        // creating a person object
  firstName: "Natalia", 
  lastName: "Ahmad", 
  hairColor: "Black", 
  eyeColor: "Brown", 
  wearsGlasses: true,
  age: 50
}
  
function getPerson(obj, prop) {                         // function that takes in 2 arguments (object and key of the object)
   delete obj[prop];                                    // deleting the object key using bracket notation
   return obj;                                          // returning the object after deleting the key, value pair
}

console.log(getPerson(person, 'age'));                  // function call

/*      OUTPUT                                          

[object Object] {                                       // age key deleted
  eyeColor: "Brown",
  firstName: "Natalia",
  hairColor: "Black",
  lastName: "Ahmad",
  wearsGlasses: true
}                                           

*/
