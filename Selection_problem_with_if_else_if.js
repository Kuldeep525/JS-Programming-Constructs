// Problem 1 .Read a single digit number and write the number in word
const prompt = require('prompt-sync')();
let number = prompt("enter the number: ");
if(number == 1 ){
    console.log("One");
}else if (number == 2 ) {
    console.log("Two");
}else if (number == 3 ) {
    console.log("Three");
}else if (number == 4 ) {
    console.log("Four");
}else if (number == 5 ) {
    console.log("Five");
}else if (number == 6 ) {
    console.log("Six");
}else if (number == 7 ) {
    console.log("Seven");
}else if (number == 8 ) {
    console.log("Eight");
}else if (number == 9 ) {
    console.log("Nine");
}else {
    console.log("pls enter correct number");
}

// Problem 2. Read a Number and Display the week day (Sunday, Monday,…)

let day = prompt("Enter the day")
if(day == 1 ){
    console.log("Monday");
}else if (day == 2 ) {
    console.log("Tuesday");
}else if (day == 3 ) {
    console.log("Wednesday");
}else if (day == 4 ) {
    console.log("Thursday");
}else if (day == 5 ) {
    console.log("Friday");
}else if (day == 6 ) {
    console.log("Saturday");
}else if (day == 7 ) {
    console.log("Sunday");
}else {
    console.log("pls enter correct number");
}

// Problem 3. Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,…


let numbers =  prompt("enter the Number");
if(numbers == 1 ){
    console.log("Unit");   
}else if (numbers == 10 ){
    console.log("Tens");
}else if (numbers == 100 ){
    console.log("Hundreds");
}else if (numbers == 1000 ){
    console.log("Thousands");
}else {
    console.log("Wrong Number");
}

// Problem 4. Enter 3 Numbers do following arithmetic operation and find the one that is maximum and minimum 1. a + b * c 3. c + a / b 2. a % b + c 4. a * b + c


let a =  prompt("enter the value of a ");
let b =  prompt("enter the value of b ");
let c =  prompt("enter the value of c ");

result1 = a + b * c ;
result2 = a % b + c ;
result3 = c + a / b ;
result4 = a * b + c ;
const arrayOfResult = [result1,result2,result3,result4];
console.log("Arithmetic Operation of result :: " +arrayOfResult );
let minimum = arrayOfResult[0];
let maximum = arrayOfResult[0];
for(i=0 ;i < arrayOfResult.length; i++){
    if(maximum < arrayOfResult[i]){
        maximum = arrayOfResult[i];
    }
    if(minimum > arrayOfResult[i]){
        minimum = arrayOfResult[i];
    }
}
console.log("minimum value is :: " +minimum);
console.log("maximum value is :: " +maximum);


