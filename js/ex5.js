/*
    HW4 - Ex5
*/

function isPalindrome(word) {
    const reversedWord = [...word].reverse().join("");
    return word == reversedWord;
}

function vowelsCount(word) {
    const allVowels = "aeiouy";
    return [...word]
        .map(i => [...allVowels].includes(i))
        .filter(i => i==true).length;
}

const inputWord = window.prompt("Enter a word:");

const inputIsPalindrome = isPalindrome(inputWord.toLowerCase());
const inputVowelsCount = vowelsCount(inputWord.toLowerCase());

console.log(`${inputWord} contains ${inputVowelsCount} ${inputVowelsCount == 1 ? "vowel" : "vowels"} and is ${inputIsPalindrome ? "" : "not "}a palindrome`);
