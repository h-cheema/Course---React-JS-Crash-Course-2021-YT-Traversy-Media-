let array = [10,20,30];

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
    continue;
    console.log(element);
}

// function doSomething() {
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         console.log(element);
//         continue;
//         console.log(element);
//     }
// }

array.forEach(function(value) {

    // These are both illegal because they're breaking out of the
    // inner function, not the forEach function.
    break; // ILLEGAL
    continue; // ILLEGAL

    console.log(value);
});

for (let index in array) { // index is the index number, not value.
    console.log(index);
    console.log(typeof(index));
}

for (const value of array) { // forof made specifically for array values.
    console.log(value);
    console.log(typeof(value));
}