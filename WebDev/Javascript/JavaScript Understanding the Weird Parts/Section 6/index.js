// function constructor
// returns the object if there is no specified return.
function Person(fname, lname) {
    this.firstname = fname;
    this.lastname = lname;
}

// Adding property to prototype.
Person.prototype.getFullName = function() {
    return this.firstname + ' ' + this.lastname;
}

var john = new Person('John', 'Doe'); // new creates an empty object.
console.log(john);

var jane = new Person('Jane', 'Doe');
console.log(jane);


Person.prototype.getFormalFullName = function() {
    return this.lastname + ' ' + this.firstname;
}

// Invokes the function from the prototype, not the Person object.
console.log(john.getFormalFullName())