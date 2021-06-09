function greet(words) {
    return function (name) { // Functions are objects that can be returned.
        console.log(words + ' ' + name);
    }
}
greet('hello')('harry'); // Invoking a function right after calling one.

// greet gets popped off the stack but the execution context remains.
// 'word' is still stored in memory and can be found in the scope chain.
var sayHi = greet('Hi'); 

sayHi('Harry');
