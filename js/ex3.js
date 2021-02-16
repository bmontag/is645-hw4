/*
    HW4 - Ex3
*/

const values = [3, 11, 7, 2, 9, 10];

const sum = values.reduce(function (v1, v2) {
    return v1 + v2;
});

const min = Math.min(...values);
const max = Math.max(...values);

console.log(`Sum of all array values: ${sum}`);
console.log(`Minimum value: ${min}`);
console.log(`Maximum value: ${max}`);
