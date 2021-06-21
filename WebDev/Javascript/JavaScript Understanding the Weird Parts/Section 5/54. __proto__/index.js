var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe',
}

// Never ever do this in real life.
john.__proto__ = person; // John prototype now inherits from person.
console.log(john.getFullName());
console.log(john.firstname);

var jane = {
    firstname: 'Jane'
}

jane.__proto__ = person;
// Jane only has firstname. js searches in protochain for lastname, takes person lastname.
console.log(jane.getFullName());