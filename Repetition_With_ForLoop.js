// Problem 1.1. Write a program that takes a command-line argument n and prints a table of the powers of 2 that are less than or equal to 2^n.

const prompt = require('prompt-sync')();
let n = prompt("Enter the number ")
for(i = 1; i <= n ; i ++){
    let powerOf2 = Math.pow(2,i);
    console.log("power of 2 : " +powerOf2);
}

// Problem 2. Write a program that takes a command-line argument n and prints the nth harmonic number.
const prompt = require('prompt-sync')();
let num = prompt("Enter the number");
let sum = 0;
for(i = 1 ; i <= num ;i++){
    sum = sum+1/i;
    console.log("Harmonic number are :: " +sum);
}

// Problem 3.Write a program that takes a input and determines if the number is a prime.

let number = prompt("Enter the number");
for(i = 2 ; i <= number-1 ; i++ )
    if(number%i == 0 )
        break;
   if(i == number)
      console.log("This is  a Prime number " +number); 

// Problem 4. Extend the program to take a range of number as input and output the Prime Numbers in that range.  
let lowerBound = prompt("Enter the lower number");
let upperBound = prompt("Enter the upper number ");
for(x = lowerBound ; x < upperBound ; x++){
    for(i = 2 ; i <= x ; i++ )
       if(x%i == 0 )
           break;
      if(i == x)
       console.log("This is  a Prime number " +x);    

}

// Problem 5 : 5. Write a program that computes a factorial of a number taken as input. Factorial – 5! = 1 * 2 * 3 * 4 * 5

let numbers = prompt("Enter the number")
var factorial = 1 ;
for(i = 1 ; i <= numbers ; i++){
    factorial = factorial*i;
}
console.log("factorial of "+numbers +"is "+factorial );

// Problem 6. Write a program to compute Factors of a number N using prime factorization method
let number = parseInt(prompt("Enter the number"));
let isPrime =0;

for(i = 2; i <= number; i++){
    if(number % i == 0 ){
        isPrime = 1;
        for(j = 2 ; j <= i / 2 ; j++){
            if(i % j == 0){
                isPrime = 0;
            }
        }
        if(isPrime == 1){
            console.log(i);
        }
    }
}

