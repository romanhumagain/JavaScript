/*
// syntax for for loop

for (let i = 0;i<n;i++){
  // statement
}

here i is the initializer
(i<n) is the stoping condition
i++ is the updation

*/

// using for loop to find the sum of number from 1 to 10

let sum = 0;
let i;
for (i=1; i<=3; i++){
  sum += i
}

console.log("The sum of number from 1 to 10 is " + sum)


// using for loop to find the multiplication of 5
let count = 1
let mul = 5;

for (i = 1; i<=10; i++){
  console.log("5 x " + count + " = " + mul*i );
  count++
}

