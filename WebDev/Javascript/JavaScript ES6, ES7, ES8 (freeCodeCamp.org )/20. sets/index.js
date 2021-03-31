const exampleSet = new Set([1,1,1,1,2,2,2,2]);

exampleSet.add(5);
exampleSet.add(5).add(17); // add
console.log(exampleSet.size);

console.log(exampleSet.delete(5)); // delete
console.log(exampleSet.size);

console.log(exampleSet.has(5)); // has

exampleSet.clear() // clear/empty set out