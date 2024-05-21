/*
async function always returns a promise...
// syntax
async function myFunc(){........};


await pause the execution of its surrounding async function until the promise is settled.
*/

function api(){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
       console.log("Fetched Data");
      resolve("Success")
    }, 2000)
  })
};

async function asyncFunc(){
  await api();
  await api();

}
// asyncFunc();


 function asyncFunction(data){
  return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        console.log("Fetched Data", data);
        resolve("Success")
      }, 3000);
  })
};


// using IIFE :-- Immediately Invoked Function Expression
(async function getData(){
  await asyncFunction(1);
  await asyncFunction(2);
  await asyncFunction(3);
})();

// getData()