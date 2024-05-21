let numbers = [89,56,56,34,23,56,67,78,89]

// using some of the useful array method

// using push() to add the element to the end
numbers.push(69)

// using pop() to delete from end and return
numbers.pop()
console.log(numbers)

// using toString() to change the array to string
numbers.toString()

// using concat() method to joins multiple arrays and return result

let new_arr = [90, 80]
let concated_arr = numbers.concat(new_arr)
console.log(concated_arr)

// using unshift() to add element to the start
new_arr.unshift(0)
console.log(new_arr)

// using shift() to delete from start and return
new_arr.shift()
console.log(new_arr)

// using slice() to returns a piece of the array
console.log(numbers.slice(2,4))


// using splice() to change the original array(add, remove, replace)
numbers.splice(1,3,56,57,58)
console.log(numbers)