/*
Syntax for map
const new_arr = array.map((value)=>{
  return value
})

*/

// using map method create a new array of square of all the number in another array
let arr = [2,4,6,8];

let new_Arr = arr.map((value)=>{
  return value**2
})
console.log(new_Arr)

