const person = {                                          // create person object
  firstName: "Natalia", 
  lastName: "Ahmad", 
  hairColor: "Black", 
  eyeColor: "Brown", 
  wearsGlasses: true,
  age: 50
}
 
function checkKey(obj, key) {                             // function that takes object and key as argument
  if(obj.hasOwnProperty(key)) {                           // if the key exists in an object, return true
    return obj.hasOwnProperty(key);
  }
  else {
    return false;                                         // else return false
  }
}

console.log(checkKey(person, 'hat'));                    // false
console.log(checkKey(person, 'age'));                    // true
console.log(checkKey(person, 'wearsGlasses'));           // true



/*          OUTPUT            

false
true
true


*/
