const BASE_URL ="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";


let dropdownSelect = document.querySelectorAll(".dropdown select");
let btn = document.querySelector(".exchange");

let amount = document.querySelector(".amount input");
let fromCurrency = document.querySelector(".from select");
let toCurrency = document.querySelector(".to select");


for(let select of dropdownSelect){
  for(currCode in countryList){
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;

    if(select.name === "from" && currCode === "USD"){
      newOption.selected = "selected";
    }
    else if(select.name === "to" && currCode === "NPR"){
      newOption.selected = "selected";
    }
    select.append(newOption);
  }
  select.addEventListener("change", (evt)=>{
    updateFlag(evt.target)
  })
}

const updateFlag = (element)=>{
  let currencyCode = element.value;
  let countryCode = countryList[currencyCode] 

  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`

  let img = element.parentElement.querySelector("img")
  img.src = newSrc;

};

btn.addEventListener("click", async (evt)=>{
evt.preventDefault();
let amountValue = amount.value;
if(amountValue =="" || amountValue<1){
  amountValue = 1;
  amount.value = 1;
}
const URL =  `${BASE_URL}/${fromCurrency.value.toLowerCase()}/${toCurrency.value.toLowerCase()}.json`
console.log(URL)

let respone = await fetch(URL)
console.log(respone.json())
})