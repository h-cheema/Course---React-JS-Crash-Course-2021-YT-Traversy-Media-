// function currying
function multiply(a, b) {
    return a * b;
}

var multiplyByTwo = multiply.bind(this, 2); // Basically sets a=2
var multiplyByThree = multiply.bind(this, 3); // Basically sets a=3

console.log(multiplyByTwo(4));
console.log(multiplyByThree(4));
