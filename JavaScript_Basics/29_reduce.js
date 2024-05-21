// create a array and find the sum of each element in the array

let arr = [1,3,5,2];
let sum = arr.reduce((pre, curr)=>{
  return pre + curr
})

console.log(sum)

// to find the greatest number and smallest number
let greatest_number = arr.reduce((pre, curr)=>{
 return pre>curr?pre:curr
})

console.log(greatest_number)