var person = {
    firstname: 'John',
    lastName: 'Doe',
    getFullName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
}

// (function(lang1, lang2) {
//     console.log('Logged: ' + this.getFullName());
//     console.log('Arguements: ' + lang1 + lang2);
//     console.log('------------------');
// }).apply()

// bind copies the person obj and sets it as this for logName.
var logPersonName = logName.bind(person);
logPersonName('en');

// First arg is where the this keyword points to, then pass the rest of the args..
logName.call(person, 'en', 'es'); 

// Same as call but second arg is an array. 
// logName.apply(person, ['en', 'es']);

(function(lang1, lang2) {
    console.log('Logged: ' + this.getFullName());
    console.log('Arguements: ' + lang1 + lang2);
    console.log('------------------');
}).apply(person, ['en', 'es']);
