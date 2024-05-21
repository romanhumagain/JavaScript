
/*// This will work Synchronousilly
console.log("first")
console.log("second")
console.log("third")
console.log("fourth")*/

// To perform Asynchronous 

// Asynchronous allows you to execute next instruction immediately and doesn't block the flow
console.log("first")
console.log("second")


setTimeout(()=>{
  console.log("Printed After 4 Sec !")
}, 4000)

console.log("third")
console.log("fourth")

