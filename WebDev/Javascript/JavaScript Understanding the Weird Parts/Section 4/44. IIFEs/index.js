// Function statement
function greet(name) {
    console.log('Hello ' + name);
}
greet();


// Function expression
var greetFunc = function(name) {
    console.log('Hello ' + name);
};
greetFunc();


// Immeadiately Invoked Function Expression (IIFE)
var greeting = function(name) {
    console.log('Hello ' + name);
}(); // Gets invoked right away.
// greeting invokes a function and assigns a string to greeting.
console.log(greeting)


// Turns a function statement into a function expression (returns a value)
// JS sees everything in parentheses as an expression
(function(name) {
    return 'Hello ' + name;
});