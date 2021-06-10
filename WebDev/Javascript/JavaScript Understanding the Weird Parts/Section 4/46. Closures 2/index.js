function buildFunctions() {
    var arr = [];

    for (let i = 0; i < 3; i++) {
        arr.push(
            function() {
                console.log(i);// i is not run here, it's just an object with a var reference.
            }
        );
    } // When exiting for loop, i = 3

    return arr;
} // Function is popped off of stack.


// i = 3 is still in the old buildFunctions's exeContext


// All print out as 3 because that's what's in the bf execution context.
var fs = buildFunctions()
fs[0]();
fs[1]();
fs[2]();