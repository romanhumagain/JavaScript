let toggle = document.querySelector("#toogle")
let current_mode = "light-mode";


toggle.addEventListener("click", ()=>{
  console.log("Changing mode!");
  if (current_mode == "light-mode"){
    document.body.style.backgroundColor="black"
    current_mode="dark-mode"
    
  }
  else{
    document.body.style.backgroundColor="white"
    current_mode="light-mode"
  }
});

