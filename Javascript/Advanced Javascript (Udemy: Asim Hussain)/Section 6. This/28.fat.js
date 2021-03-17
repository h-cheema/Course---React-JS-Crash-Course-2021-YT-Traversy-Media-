let obj = {
    name: "asim",
    sayLater: function(){ // this = obj
    // sayLater: ()=> { // this = whatever obj is lexically in
        setTimeout(function() { // changing this to setTimeout(()=>{ makes "this" = obj
            console.log(`${this.name}`); // this = window (non strict mode)
        }, 1000);
    }
};
obj.sayLater();