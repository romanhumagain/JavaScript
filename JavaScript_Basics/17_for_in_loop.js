/*
// Using for of loop
----> used for objects 


 */

const student = {
  name:"Roman Humagain",
  course:"BSC Hons",
  college:"PCPS College",
  age:20
}

for(let obj_key in student){
  // console.log(obj_key)  // returns key 

  // printing the key along with value
  console.log(obj_key+ " :-> " + student[obj_key] )
}