// problem 1. Write a program that takes a command-line argument n and prints a table of the powers of 2
const prompt = require('prompt-sync')();
let number = prompt("Enter the number ")
let i = 0;
while(i <= number ){
    let powerOf2 = Math.pow(2,i);
    if(powerOf2 <= 256){
        console.log(powerOf2);
        i++;
    }else{
        break;
    }
}

// problem 2 :  Find the Magic Number
//             a. Ask the user to think of a number n between 1 to 100
//             b. Then check with the user if the number is less then n/2 or greater
//             c. Repeat till the Magic Number is reached..


function magicNumber(userNumber){
    const prompt = require('prompt-sync')();
    let guessNumber = parseInt(prompt("Enter the number between 1 to 100 "));
    let flag = true;
    while(flag){
    if(guessNumber == userNumber){
        console.log("Your guess is right");
        flag = false;
    }else if (guessNumber < userNumber){
        console.log("Your guess is lesser than the number ");
        magicNumber(userNumber);
    }else if (guessNumber > userNumber){
        console.log("Your guess is greater than the number ");
        magicNumber(userNumber);
    }
}
}
let userNumber = Math.floor(Math.random() * 99 + 1) ;
console.log(userNumber);
magicNumber(userNumber); 


// problem 3. Extend the Flip Coin problem till either Heads or Tails wins 11 times.

let maxcount = 11;
let countHead = 1 ;
let countTails = 1 ;
let i = 1 ;
let j = 1 ;
while(i <= maxcount && j <= maxcount){
    let randomNumber = Math.floor(Math.random() * 2);
    if(randomNumber == 0){
        console.log("Heads");
        while(countHead <= maxcount){
            i++;
            countHead ++;
            break;
        }
    }else{
        console.log("Tails")
        while(countTails <= maxcount){
            j++;
            countTails++;
            break;
        }
    }
}

// Problem 4 : Write a Program where a gambler starts with Rs 100 and places Re  bet
//             until he/she goes broke i.e. no more money to gamble or reaches the
//             goal of Rs 200. Keeps track of number of times won and number of bets made.


let balance = 100;
let bet = 10;
let winCount = 0;
let loseCount = 0;
let flag = true;
while(flag){
    let gameResult = Math.floor(Math.random() * 2)
    if(gameResult == 1 ){
        balance = balance + bet;
        winCount++;
    }
    else if(gameResult == 0){
        balance = balance - bet ;
        loseCount++;
    }
    if(balance == 0 || balance == 200){
        flag = false;
    }

}
console.log("Balance : " +balance);
console.log("Total Won Count: " + winCount);
console.log("Total lose Count: " + loseCount);









