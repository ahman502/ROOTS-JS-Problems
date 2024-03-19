function checkDupes(array) {
  let result = array.filter((val, index, array) => {
    return array.indexOf(val) === index;
  });
  
  return result;
}

console.log(checkDupes([1, 20, 3, 3, 5, 7, 4, 4, 2, 5, 3, 3, 20, 10, 4, 4, 10, 5, 6]));
console.log(checkDupes([1, 4, 2, 2, 5, 7, 4, 4, 2, 5]));

/*     OUTPUT               

[1, 20, 3, 5, 7, 4, 2, 10, 6]
[1, 4, 2, 5, 7]

*/
