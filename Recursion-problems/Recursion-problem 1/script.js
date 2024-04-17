function factorial(num) {                         // function declaration
  if (num < 0) {                                  // there's no factorial of negative numbers so I return -1
    return -1;
  }
  else if (num === 1 || num === 0){               // factorial of 0 & 1 is 1 so I return 1
    return 1;
  }
  else {                                         // for all other numbers, I use recursion to multiply that number with 1 less than that number until I reach 1!
    return num * factorial(num - 1);
  }
}

console.log(factorial(6));
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(-8));
console.log(factorial(10));


/*    OUTPUT     

720
1
1
-1
3628800


*/
