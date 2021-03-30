// handle color changing.

// step 1: grab elements
let title = document.getElementById('title');
let p1 = document.getElementById('first-paragraph');
let p2 = document.getElementById('second-paragraph');

// step 2: define blue() and red()
function blue() {
    let color = 'blue';
    title.setAttribute('style', 'color:' + color)
    p1.setAttribute('style', `color: ${color}`)
    p2.setAttribute('style', `color: ${color}`)
}

function red() {
    let color = 'red';
    title.setAttribute('style', 'color:' + color)
    p1.setAttribute('style', `color: ${color}`)
    p2.setAttribute('style', `color: ${color}`)
}