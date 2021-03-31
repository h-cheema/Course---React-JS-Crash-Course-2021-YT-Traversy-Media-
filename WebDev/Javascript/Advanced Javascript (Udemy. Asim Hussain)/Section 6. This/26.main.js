var a = function() { // anon func
    console.log(this);
}.bind(1); // set "this" to 1
// bind() only works with functions expressions

var asim = {
    func: a
}

asim.func() // "this" is still 1