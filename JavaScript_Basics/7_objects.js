const persons = {
    f_name:"Roman",
    l_name:"Humagain",
    age:21,
    id:2214109,
    fullName:function(){
      return this.f_name + " " + this.l_name;
    }
};
persons["age"] += 1


let name = persons.fullName();
// to get the full name
console.log(name)
console.log(typeof persons["f_name"])
console.log("The updated age is: " + persons["age"])

