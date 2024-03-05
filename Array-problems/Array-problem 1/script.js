function printElements(arr, n) {
     let finalArray = [];
     
     if(Array.isArray(arr) && typeof n === 'number' && n > 0 && n <= arr.length) {
       for(i = 0; i < n; i++) {
         finalArray.push(arr[i]);
       }
     }
     else {
       return 'Check your input & try again!';
     }
     return finalArray;
}

console.log(printElements([15, 90, 26, 57, 19, 65, 81, 78], -3));
console.log(printElements([15, 90, 26, 57, 19, 65, 81, 78], 8));
console.log(printElements([15, 90, 26, 57, 19, 65, 81, 78], 10));
console.log(printElements(['Sally', 'Josh', 'Megan', 'Ryan', 'Jacob', 'Leslie', 'Brian', 'Victoria'], 4));
console.log(printElements(['Sally', 'Josh', 'Megan'], 0));
console.log(printElements(['Sally', 'Josh', 'Megan'], true));
console.log(printElements([], 0));
console.log(printElements([], '2'));

/* 
OUTPUT: 

"Check your input & try again!"
[15, 90, 26, 57, 19, 65, 81, 78]
"Check your input & try again!"
["Sally", "Josh", "Megan", "Ryan"]
"Check your input & try again!"
"Check your input & try again!"
"Check your input & try again!"
"Check your input & try again!"

*/
