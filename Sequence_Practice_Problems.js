
// Problem 1 : Use REPL – Random Function Math.floor(Math.random() * 10); to get Single Digit.

let singleDigit = Math.floor(Math.random() * 10 );
console.log("Single digit generate is  " +singleDigit);

// Problem 2 : – Use Random to get Dice Number between 1 to 6

let dice = Math.floor(Math.random() * 10 ) % 7 ;
console.log("Random generated dice number is :" +dice);

// Problem 3 : Add two Random Dice Number and Print the Result

let dice1 = Math.floor(Math.random() * 10 ) % 7 ;
let dice2 = Math.floor(Math.random() * 10 ) % 7 ;
let result = dice1+dice2;
console.log("Dice1 number:  " +dice1 +"\n" +"Dice2 number: " + dice2);
console.log("Addition of two random dice number is ::" +result);

// Problem 4 : Write a program that reads 5 Random 2 Digit values ,then find their sum and the average
let sum = 0;
let average = 0;
console.log("Generating 5 random 2 digits number")
for(i = 1 ; i <= 5 ; i++){
    let randDigits = Math.floor(Math.random() * 100) ;
    console.log(i+" random number is " +randDigits);
    sum += randDigits;  
    
}
average = sum/5;
console.log("sum is " +sum);
console.log("Average is " +average);

/* Problem 5 : – Unit Conversion
a. 1ft = 12 in then 42 in = ? ft
b. Rectangular Plot of 60 feet x 40 feet in meters
c. Calculate area of 25 such plots in acres */

// a.unitconversion
const prompt = require('prompt-sync')();
var choice = prompt("Press 1 to convert feet to inches \n Press 2 to convert inches to feet ");
if (choice == 1 ){
    let feet = prompt("Enter the number ");
    let feetToinches = feet*12;
    console.log("Conversion of feet to inches is :: " +feetToinches +" inches");
}else if (choice == 2) {
    let inches = prompt("enter the number")
    let inchesTOfeet = inches / 12;
    console.log("Conversion of inches to feet is :: " +nchesTOfeet +" feet");
} else {
    console.log("make correct choice");
}

// b. finding rectangular plot
var length = prompt("enter the length");
var breadth = prompt("enter the breadth");
let areaOfRectanglesInfeets = length*breadth;
let areaOfRectanglesInmeters = areaOfRectanglesInfeets*0.3048;
console.log("Area of rectangle plot is " +areaOfRectanglesInmeters );

//Area in acres
let areaInAcres = 25* areaOfRectanglesInmeters * areaOfRectanglesInmeters * 0.0002471054;
console.log("area of 25 plot in acres is " +areaInAcres);
