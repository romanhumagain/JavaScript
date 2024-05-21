/*
Syntax for arrow function

cont functionName = (params1, params2) =>{
  return params1+params2

}
 */

const sumFunction = (num1, num2)=>{
      // console.log(`The sum of ${num1} and ${num2} is ${num1+num2}`)
      return num1+num2
}

let result = sumFunction(6,4)
console.log(result)