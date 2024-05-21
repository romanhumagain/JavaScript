/* JavaScript Variables can be declared in 4 ways  */
/* 
automatically
var
let
const 
*/

x = 5;
y = 6;
z = x+y;
console.log(z)

// using var 
var x = 10 
var y = x + 60
console.log(y)

// mixed example 
let price1 = 10
let price2 = 30
const total = price1 + price2
console.log(total)


/*
===============  When to Use var, let, or const?  =============
1. Always declare variables

2. Always use const if the value should not be changed

3. Always use const if the type should not be changed (Arrays and Objects)

4. Only use let if you can't use const

5. Only use var if you MUST support old browsers. */


/* One Statement, Many Variables */

let name = "Roman Humagain", field = "software engineer" 
console.log(field)


