console.log(this) // this points to the Window obj

function a() { // Still points to Window obj
    console.log(this)
}

var b = function() { // Even this points to Window obj
    console.log(this)
    this.newVar = "some string" // attaches to the Window obj.
}

// Both get their own this keyword, but both point to same Window obj.
a();
b();


var c = {
    name: 'The c object',
    log: function() {
        console.log(this) // this = the c object. The function is sitting in the c object.

        var setname = function(newname) {
            this.name = newname // This actually points to the Window obj
        }
    }
}
c.log()



// Use self instead of this to point to the right 'this'.
var d = {
    name: 'The c object',
    log: function() {

        var self = this

        console.log(self)

        var setname = function(newname) {
            self.name = newname
        }
    }
}
