/*
fetch API
The fetch API provides as interface for fetching resourses

It uses Request and Response objects

The fetch() method is used to fetch a resourse(data)


// syntax for fetch api
let promise = fetch(url, [options])
*/

let btn = document.querySelector(".getDataBtn");
let facts = document.querySelector("#data");


const URL = "https://cat-fact.herokuapp.com/facts";
let response = fetch(URL);


// // using promise chain
// response.then((res)=>{
//   console.log(res)
// })

// using async await
let fact_text = ""

const getFacts = async ()=>{
  let response = await fetch(URL);
  console.log(response);

  let data = await response.json();
  
  for(facts_data of data){
    let text = facts_data.text;
    console.log(text);
    fact_text += text + "<br>";
  }
  facts.innerHTML = fact_text;
}
btn.addEventListener("click", ()=>{
  getFacts();

})
