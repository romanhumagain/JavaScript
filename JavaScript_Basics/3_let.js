// variable declared inside a {} block cannot be accessed from outside the box
{
  let x = 69;
}
// here x cannnot be used outside of the block


// variable declared with the var always have the global scope
{
  var x = 6;
}

// here x can be accessed

// ---- let cannot be redeclared
let newx = "john doe";
let newx = "roman";



let x = 10;
// here x is 10

{
  let x = 2;
  // here x is 2
}

// Here x is 10