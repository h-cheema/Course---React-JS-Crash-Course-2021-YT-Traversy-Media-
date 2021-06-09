function greet(fname, lname, lang, ...other) { // ...other is extra parameters.
    
    lang = lang || 'en' // Default parameter

    if (arguments.length === 0) { // arguments is a key word
        console.log('missing parameters')
    } else {
        console.log('arg 0' + arguements[0])
    }

}