// Problem 1. Read a single digit number and write the number in word using Case

const prompt = require('prompt-sync')();
let number = parseInt(prompt("Enter the number: "));
switch (number) {
    case 1 :
        console.log("One");
        break;
    case 2 :
        console.log("Two");
        break; 
    case 3 :
        console.log("Three");         
        break;
    case 4 :    
        console.log("Four");         
        break;
    case 5 : 
        console.log("Five");   
        break;
    case 6 :
        console.log("Six");
        break;  
    case 7 :
        console.log("Seven");  
        break;
    case 8 :
        console.log("Eight");
        break;
    case 9 :
        console.log("Nine");
        break;  
    default : 
        console.log("Enter correct number");
        break;          
}

// Problem 2. Read a Number and Display the week day (Sunday, Monday,…)

let day = parseInt(prompt("Enter the day "));
switch(day){
    case 1 : 
        console.log("Monday");
        break;
    case 2 : 
        console.log("Tuesday");
        break;
    case 3 : 
        console.log("Wednesday");
        break;
    case 4 :
        console.log("Thursday");
        break;
    case 5 :
        console.log("Friday");
        break;
    case 6 :
        console.log("Saturday");
        break;
    case 7 :
        console.log("Sunday");
        break;
    default :
        console.log("Enter correct day");
        break;

}
// Problem 3. Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,…
 
let numb = parseInt(prompt("Enter the number "));
switch(numb){
    case 1 :
        console.log("Unit");
        break;
    case 10 :
        console.log("Tens");
        break;
    case 100 :
        console.log("Hundreds");
        break;
    case 1000 :
        console.log("Thousand");
        break;
    default : 
        console.log("Wrong input");
        break;                
}

// Problems 4. Write a program that takes User Inputs and does Unit Conversion of different Length units 1. Feet to Inch 2. Inch to Feet 3. Feet to Meter 4. Meter to Feet
console.log("1. Feet to Inch 2. Inch to Feet 3. Feet to Meter 4. Meter to Feet");
let choice = parseInt(prompt("Enter the number"));
switch(choice){
    case 1 :
        let feet = prompt("Enter the feet");
        let feetToInches = feet*12;
        console.log("Feet to Inches : " +feetToInches +"inches");
    case 2 : 
        let inch = prompt("Enter the inch");
        let inchToFeet = inch/12;
        console.log("Inch To Feet : " +inchToFeet +"feet")
        break;
    case 3 :
        let value2 = prompt("Enter the feet ");
        let feetToMeter = value2/3.28;
        console.log("Feet To Meter" +feetToMeter +"meter");
        break;
    case 4 : 
       let meter = prompt("Enter the meter ");
       let meterToFeet = meter*3.28;
       console.log("Meter To Feet" +meterToFeet);
       break;
    default :
       console.log("Make correct choice");
       break;
}







