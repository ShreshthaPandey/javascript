const score = 400
console.log(score);
const balance = new Number(100)
console.log(balance);
console.log(balance.toString().length);

const otherNumber = 23.456
console.log(otherNumber.toPrecision(4))

const hundr = 10000000
console.log(hundr.toLocaleString('en-IN'))

// *****************maths************************

console.log(Math.abs(-4))
console.log(Math.round(4.67));
console.log(Math.ceil(4.6))
console.log(Math.floor(45.563))
console.log(Math.max(4,5,6,7,8,0))
console.log(Math.random()*100)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
