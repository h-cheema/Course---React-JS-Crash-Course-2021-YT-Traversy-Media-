"use strict"

// What is variable hoisting?
console.log(a);
var a = 1; // hoisted to the top before running. already declared.


foo() // Runs fine.
function foo() { // Function is hoisted
    var a;
    console.log(a);
    a = 1;
}


foo() // var foo; is hoisted to the top, creating an error.
var foo = function() { // Anonymous function is not associated with the var.
    var a;
    console.log(a);
    a = 1;
}