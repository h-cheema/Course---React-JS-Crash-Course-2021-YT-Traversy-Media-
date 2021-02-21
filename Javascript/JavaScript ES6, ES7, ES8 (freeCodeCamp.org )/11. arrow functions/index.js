function add(...nums) {

    let total = nums.reduce((x, y) => {
        return x+y;
    });

    // remove: function keyword, curly brackets, return keyword.
    let total = nums.reduce((x, y) => x+y)
    console.log(total);
}

add(4, 5, 6, 7, 8, 12);