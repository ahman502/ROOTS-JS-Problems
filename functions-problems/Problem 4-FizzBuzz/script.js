function fizzBuzz() {                         // function declaration
    
    for(let i = 1; i <= 100; i++) {               // for loop to start from 1 and go all the way to 100 (inclusive)
        
        if(i % 15 === 0) {                    // the lcm of 3 & 5 is 15 so in this conditional, I look for multiples of 15
            console.log("FizzBuzz");          // if the number is a multiple of 15, I print FizzBuzz
        }
      
        else if(i % 3 === 0) {                // if the number is not a multiple of both 3 & 5, we check if it's a multiple of 3    
            console.log("Fizz");              // if it is, we print Fizz
        } 
      
        else if(i % 5 === 0) {                // if the number is neither a multiple of 3 & 5, or just 3, we check if it's a multiple of 5
            console.log("Buzz");              // if it is, we print Buzz
        }
      
        else {                                // all other numbers fall under the else statement
            console.log(i);                   // and we just print that number
        }
    }
    return;                                   // finally, I add a return statement outside the for loop so the numbers are printed only once the for loop is complete
}
  
fizzBuzz();                                   // function call

/*  OUTPUT:
  
1
2
"Fizz"
4
"Buzz"
"Fizz"
7
8
"Fizz"
"Buzz"
11
"Fizz"
13
14
"FizzBuzz"
16
17
"Fizz"
19
"Buzz"
"Fizz"
22
23
"Fizz"
"Buzz"
26
"Fizz"
28
29
"FizzBuzz"
31
32
"Fizz"
34
"Buzz"
"Fizz"
37
38
"Fizz"
"Buzz"
41
"Fizz"
43
44
"FizzBuzz"
46
47
"Fizz"
49
"Buzz"
"Fizz"
52
53
"Fizz"
"Buzz"
56
"Fizz"
58
59
"FizzBuzz"
61
62
"Fizz"
64
"Buzz"
"Fizz"
67
68
"Fizz"
"Buzz"
71
"Fizz"
73
74
"FizzBuzz"
76
77
"Fizz"
79
"Buzz"
"Fizz"
82
83
"Fizz"
"Buzz"
86
"Fizz"
88
89
"FizzBuzz"
91
92
"Fizz"
94
"Buzz"
"Fizz"
97
98
"Fizz"
"Buzz"
  
  
*/