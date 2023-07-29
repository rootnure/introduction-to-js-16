var price = 100;
// console.log(typeof(price));
var price1 = '100';
// console.log(typeof(price1));
var isHappy = true;
// console.log(typeof(isHappy));
var newVariable;
// console.log(typeof(newVariable));

var num1 = 0.1;
var num2 = 0.2;
var sum = num1 + num2;
sum = sum.toFixed(1); // will give a string
sum = parseFloat(sum);
console.log(sum);

console.log(Number((55.2).toFixed(2)));