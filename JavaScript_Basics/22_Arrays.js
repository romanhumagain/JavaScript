// let name = ["roman", "ram", "hari"]
// console.log(typeof name)   //object

// // using indexing to get the value
// console.log(name[0])

// // looping over arrays
// let numbers = [2,4,5,7,8,0]
// // printing all the number 

// // using for loop
// for(let i=0; i<numbers.length; i++){
//   console.log(numbers[i])
// }


// // using for of loop
// for(let number of numbers){
//   console.log(number)
// }


// to find the highest/lowest marks using for loop
let marks = [79, 22, 56, 19, 99, 88, 56, 69]
let highest_marks = 0
let lowest_marks = 0

for(let i=0; i<marks.length;i++){
  if(highest_marks === 0 && lowest_marks === 0){
    highest_marks = marks[i]
    lowest_marks = marks[i]
    
  }
  if(highest_marks<marks[i]){
    highest_marks = marks[i]
  }
  if (lowest_marks>marks[i]){
    lowest_marks = marks[i]
  }
}

console.log("Looping finished")
console.log("Highest marks: " + highest_marks)
console.log("Lowest marks: " + lowest_marks)


// question
/* In the given array there are some price of the products, if the shop has provided 10% offer calculate the new price of the product */

let prices = [250, 500, 300, 100, 800, 860, 840, 666]
let offer_prices = []

// using for of loop
for(let price of prices){
  let new_price = price - ((10*price)/100)
  offer_prices.push(new_price)
}

console.log(`The price after the 10% offer on each product is ${offer_prices}`)



