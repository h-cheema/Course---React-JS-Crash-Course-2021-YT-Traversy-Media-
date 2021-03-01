"use strict"

// ES5 FEATURES
    // What are the different scope in js?
    var hc = 1;

    // All global vars are properties of the window object.
    window.moo = 1; // We can call moo in console


    function moo() {
        var foo = 1;
    };
    console.log(foo); // foo does not exist outside of the function block.


    for (let i = 0; i < array.length; i++) {
        var j = 5;
        // Since this function is global scope, i and j are accessible outside
        // the for loop
    }

// ES6 FEATURES

    // {} is a block. var is created in the global scope.
    {
        var a = "block"; // ES5 var stays the same.
    }
    console.log(a); // Prints out successfully.

    // Both let and const are block scoped, but not var.
    {
        let b = "block";
        {
            console.log(b);
        }
    }
    console.log(b); // b only exists in block scope.
    {
        const c = "block";
        {
            console.log(c);     
        }
        c = "moo" // Cannot reasign to const variable.
    }
