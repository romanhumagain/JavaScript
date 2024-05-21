// Promise is for "eventual" completion of task. It is an object in JS. 
// It is a solution to callback hell.

/* Syntax for promises */

/*
let promises = new Promise((resolve, reject)=>{........})

// resolve and reject are the callback provided by the js
*/
const getPromise = () =>{
  return new Promise((resolve, reject)=>{
    // console.log("I am learning promise !")
    resolve("success")
    // reject("error occurs")
    });
}

let promise = getPromise();
promise.then((res)=>{
  console.log(res)
  console.log("Promise Fullfilled")
})

promise.catch((err)=>{
  console.log(err)
})

// let promise = new Promise((resolve, reject)=>{
// console.log("I am learning promise !")
// // resolve("success")
// // reject("error occurs")

// });
// console.log(promise)

// function getData(dataId, getNextData){
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       console.log("Data", dataId)
//       resolve("Success")
//       if(getNextData){
//         getNextData();
//       }
//     }, 6000)
//   })
// }

// Promises
/*
.then() & catch()

*/
/*
if promises fulfilled we use promise.then((result)=>{...})
if promises rejected we use promise.catch((error)=>{...})
*/


