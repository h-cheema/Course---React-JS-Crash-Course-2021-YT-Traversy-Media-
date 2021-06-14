function makeGreeting(language) {
    return function(firstName, lastName) {

        if (language === 'en') {
            console.log('Hello ' + firstName + ' ' + lastName)
        }

        if (language === 'es') {
            console.log('Hello ' + firstName + ' ' + lastName)
        }

    }
}


// These functions both point to different spots in memeory.
// Each function has its own exe context every time makeGreeting() is called
var greetEnglish = makeGreeting('en'); // Closure points to language = en
var greetSpanish = makeGreeting('es'); // Closure points to language = es


