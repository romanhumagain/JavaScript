// switch statement is used to perform different actions based on different conditions

// // syntax
// switch(expression){
//   case x;
//   // code block
//   break;

//   case yield;
//   // code block
//   break;

//   default:
//     // code block

// }

let today = new Date()
console.log(today.getDay())
let day;

switch(today.getDay()){
  case 0:
  day = "Sunday";
  break;

  case 1:
    day = "Monday";
    break;

  case 2:
    day = "Tuesday";
    break;

  case 3:
    day = "Wednesday";
    break;

  case 4:
    day = "Thursday";
    break;

  case 5:
    day = "Firday";
    break;

  case 6:
    day = "Saturday";
    break;
    
  default:
    day = "Invalid"
}

console.log("Today is Happy " + day)