const sampleObject = 
  {
    item1: "Milk",
    item2: "Sugar",
    item3: "Rice"
  };

function getLength(object) {
  return Object.keys(object).length;
}

console.log(getLength(sampleObject));


/*   OUTPUT    

3

*/
