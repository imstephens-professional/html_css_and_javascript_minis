let name = 'Jared'; // block-scoped (only within curly brackets); can't be redeclared
console.log(name);

const PI = 3.14;    // const = constant, cannot be redeclared
console.log(PI);

var count = 0;      // function-scoped (within whole function); can be redeclared

if(count < 5) {
    count = 1;
    console.log(count);
}

let x = 10;
let y = 5;

let sum = x + y;
let difference = x - y;
let product = x * y;
let quotient = x / y;
let remainder = x % y;
let result = x ** y;
let compAll = x + y + sum + difference + product + quotient + remainder + result;

console.log(sum);
console.log(difference);
console.log(product);
console.log(quotient);
console.log(remainder);
console.log(result);
console.log(compAll);

console.log(x == y);    // equal to         (checks value; can convert data type)
console.log(x != y);    // not equal to
console.log(x === y);   // strict equal to  (checks value and data type)
console.log(x !== y);   // strict not equal to 

console.log(x > y);
console.log(x < y);
console.log(x >= y);
