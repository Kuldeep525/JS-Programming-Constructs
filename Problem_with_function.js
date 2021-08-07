/* Problem 1 : Help user find degF or degC based on their Conversion Selection. Use
Case Statement and ensure that the inputs are within the Freezing Point (
0 °C / 32 °F ) and the Boiling Point of Water ( 100 °C / 212 °F ) 
a. degF = (degC * 9/5) + 32 b. degC = (degF – 32) * 5/9 */

const prompt = require('prompt-sync')();
let choice = parseInt(prompt("Enter 1:Degree in F \n 2.Degree in C"));
switch(choice){
    case 1: 
       degreeInFahrenheit();
       break;
    case 2:
        degreeInCelsius();
        break;
    default : 
        console.log("Enter the correct choice");    
        break;
}

function degreeInFahrenheit(){
    let celsius = parseFloat(prompt("enter the temperature  )"));
    let fahrenheit = (celsius * 9/5) + 32;
    console.log("Degree in F : "+fahrenheit +"F");
}

function degreeInCelsius(){
    let fahrenheit = parseFloat(prompt("Enter the temperature "));
    let celsius = (fahrenheit-32) * 5/9 ;
    console.log("Degree in C : " +celsius +"C");
}

//Problem 2. check number is palidrome or not.

function palidrome(firstNumber , secondNumber){  
    let reverse = 0;
    let remainder = 0;
    while(secondNumber > 0){
         remainder = Math.floor(secondNumber % 10) ;
        reverse = reverse * 10 + remainder;
        secondNumber = Math.floor(secondNumber / 10 );
    }
    if(firstNumber == reverse){
        console.log("Number is Palidrome");
    }
    else{
        console.log("Number is not palidrome");
    }
}
let firstNumber = prompt("enter the first number");
let secondNumber = prompt("enter the second number");
palidrome(firstNumber,secondNumber);


// Problem 3 : Take a number from user and check if the number is a Prime then show
//             that its palindrome is also prime
//             a. Write function check if number is Prime
//             b. Write function to get the Palindrome.
//             c. Check if the Palindrome number is also prime

function checkIsPrime(number){
    if (number <= 1) {
        return false;
    } else {
        for (i = 2; i < number; i++) {
            if (number % i == 0) {
                return false;
            }
        }
        return true;
    }
}

// Problem 3 : Take a number from user and check if the number is a Prime then show
//             that its palindrome is also prime
//             a. Write function check if number is Prime
//             b. Write function to get the Palindrome.
//             c. Check if the Palindrome number is also prime

function checkIsPalidrome(number){
   let reverse = 0;
   let remainder = 0;
    temp = number;
    while(number > 0){
        remainder = Math.floor(number % 10);
        reverse = reverse * 10 + remainder;
        number = Math.floor(number/10);
    }
    return reverse;
}

let number = prompt("Enter the number ");
if(checkIsPrime(number)){
    console.log(`Number  is prime..`);
}else{
    console.log(`Number is Not prime..`)
}

let palidromeNumber = checkIsPalidrome(number);
if(checkIsPrime(palidromeNumber)){
    console.log("number's palindrome is prime");
}else{
    console.log("number's palindrome is not prime")
}