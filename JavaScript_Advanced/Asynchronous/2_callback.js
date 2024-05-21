// A callback is a function which is passed as an argument to next function.
function sum(num1, num2){
  console.log(num1 + num2);
};

function calculator(a, b, sumCallback){
  sumCallback(a, b);
};

calculator(4,5,sum)

// Another way by using arrow function
calculator(4,5, (num1,num2)=>{
  console.log(num1 + num2);
})


setTimeout(() => {
  console.log("Hello");
}, 3000);
