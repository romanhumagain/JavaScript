function asyncFunction(data){
  return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        console.log("Fetched Data", data);
        resolve("Success")
      }, 3000);
  })
}
// console.log("Fetching data 1........");
// asyncFunction(1).then((res)=>{
//   console.log("Fetching data 2........");
//   asyncFunction(2).then((res)=>{
//   })
// })

asyncFunction(10)
.then((res=>{
  return asyncFunction(20);
}))
.then((res)=>{
  return asyncFunction(30);
})
.then((res)=>{
  console.log(res);
})

