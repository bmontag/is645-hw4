/*
    HW4 - Ex6
*/

const MIN_VALUE = 1
const MAX_VALUE = 100

const randomNumber = Math.floor(Math.random() * MAX_VALUE) + MIN_VALUE;

var output = document.getElementById('output');

var guess = -1
var attemptCount = 0
while (guess != randomNumber) {
    guessString = window.prompt(`Enter a number between ${MIN_VALUE} and ${MAX_VALUE}:`);
    if (guessString == null) { break; }
    
    guess = Number(guessString);
    if (Number.isNaN(guess)) { continue; }

    attemptCount += 1

    if (guess < randomNumber) {
        console.log("Too low, guess again");
    }
    else if (guess > randomNumber) {
        console.log("Too high, guess again");
    }
    else {
        console.log(`Correct! It took you ${attemptCount} attempts to guess the correct number.`);
    }
}
