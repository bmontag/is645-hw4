/*
    HW4 - Ex2
*/

const r = Number(prompt("Enter the circle radius:"));

const circle = {
    radius: r,
    circumference: function() {
        return this.radius * 2 * Math.PI;
    },
    area: function() {
        return (this.radius ** 2) * Math.PI;
    }
};

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);
