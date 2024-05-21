// callback hell :- Nested callback stacked below one another 

function getData(DataId, getNextData){
  setTimeout(() => {
    console.log(DataId)
    if (getNextData){
      getNextData();

    }
  }, 2000);
}
getData(1, ()=>{
getData(2, ()=>{
  getData(3)
})
})