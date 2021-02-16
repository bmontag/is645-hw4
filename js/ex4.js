/*
    HW4 - Ex4
*/

var allWords = [];
var stopWord = "STOP";

var input = "";
while (input != null) {
    input = window.prompt("Enter word: (Type stop to end.)");
    if (input == null || input.toUpperCase() == stopWord) {
        break;
    } else {
        allWords.push(input);
    }
}

if (allWords.length > 0) {
    console.log(`You entered the following words:`);
    allWords.forEach(w => console.log(w));
} else {
    console.log(`No words to display, Stop was the first word entered.`);
}
