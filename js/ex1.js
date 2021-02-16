/*
    HW4 - Ex1
*/

const allowedOperators = ["+", "-", "*", "/"];

var nb1 = Number(window.prompt("Enter Number 1:"));
var nb2 = Number(window.prompt("Enter Number 2:"));
var operator = window.prompt("Enter Mathematical Operation (+, -, *, /):");

if (!Number.isNaN(nb1)
    && !Number.isNaN(nb2)
    && allowedOperators.includes(operator)) {

    var result = 0
    
    switch (operator) {
        case "+":
            result = nb1 + nb2;
            break;
        case "-":
            result = nb1 - nb2;
            break;
        case "*":
            result = nb1 * nb2;
            break;
        case "/":
            result = nb1 / nb2;
            break;
        default:
            break;
    }
    
    console.log(`${nb1} ${operator} ${nb2} = ${result}`);
    
}
else {
    console.log(`Invalid input.`);
}
