/*
Syntax for foreach
arr.foreach((val)=>{
  console.log(value)
})
 */

let arr = ["Roman", "Anuj", "Prashanna"]
arr.forEach((val, idx)=>{
  console.log(val,idx)
})

// practice question
// for the given array of number print the square of each number
let new_arr = [2,3,4,6,8,9]

// using foreach function
new_arr.forEach((element) => {
  console.log(`The square of ${element} is ${element**2}`)
});

console.log("*******************")

let arrFunc = (num)=>{
  console.log(num**2);
}

new_arr.forEach(arrFunc)

