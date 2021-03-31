// step 1: add text dynamically to the div
document.getElementById('note').textContent = "this is pure DOM manipulation";

// step 2: change circle bg color on click
let circle = document.getElementById('circle');
circle.addEventListener('click', changeColor);

// step 3: define handler function
function changeColor() {
    let randomColor = 
        Math.floor(Math.random() * 16777216)
        .toString(16);

    circle.style.backgroundColor = `#${randomColor}`;
}