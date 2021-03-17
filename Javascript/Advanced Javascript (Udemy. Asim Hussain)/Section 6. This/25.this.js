console.log(this); // prints window obj

this.harj = 1;

// These all print 1
// console.log(this.harj);
// console.log(window.harj); 
// console.log(harj);
function checkThis() {
    console.log(this);
}
checkThis()

var harj = {
    checkThis: function() {
        
        var self = this; // clears up confusion
        console.log(self);

        function checkOther() {
            console.log(self);
        }

        checkOther();
    }
};
// harj.checkThis();
console.log(harj);

var func = harj.checkThis;
func();