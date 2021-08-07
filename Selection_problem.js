// problem 1 : Write a program that reads 5 Random 3 Digit values and then outputs the minimum and the maximum value

const arrayOfRandomNumber = [] ; 
console.log("generating 5 random 3 digit number");
for (i = 0; i <= 4 ; i++ ){
    let randomDigits = Math.floor(Math.random() * 999);
    arrayOfRandomNumber[i] = randomDigits;
}
console.log("random number are " +arrayOfRandomNumber);

let minimum = arrayOfRandomNumber[0];
let maximum = arrayOfRandomNumber[0];
for(i = 0 ; i <= arrayOfRandomNumber.length; i++ ){
    if(minimum > arrayOfRandomNumber[i]){
        minimum = arrayOfRandomNumber[i];
    }
    if(maximum < arrayOfRandomNumber[i]){
        maximum = arrayOfRandomNumber[i];
    }
}   
console.log("minimum value is :: " +minimum);
console.log("maximum value is :: " +maximum);

//Write a program that takes day and month from the command line and prints true if day of month is between March 20 and June 20, false otherwise.

const prompt = require('prompt-sync')();
let month =  prompt("enter the month");
let date = prompt("Enter the date ");
if(month == 3 && date >= 20 && date <= 30){
    console.log("true");
}
else if (month == 4 && date >= 1 && date <= 30 ){
    console.log("true");
}
else if (month == 5 && date >= 1 && date <= 30 ){
    console.log("true");
}
else if (month == 6 && date >= 1 && date <= 20 ){
    console.log("true");
}
else{
    console.log("false")
}

// Problem 3 : Write a program that takes a year as input and outputs the Year is a Leap Year or not a Leap Year. A Leap Year checks for 4 Digit Number, Divisible by 4 and not 100 unless divisible by 400.
//const prompt = require('prompt-sync')();
let year =  prompt("Enter the leap year "); 
if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
    console.log("leapyear")
}
else{
    console.log("Not a leapyear")
}

// Problem 4 : Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly.

let coin = Math.floor(Math.random() * 10) % 2;
if(coin == 1){
    console.log("Heads")
}else{
    console.log("Tails");
}



