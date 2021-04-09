// grab out output <p> element

let output = document.getElementById('output');

document.querySelector('form').addEventListener('submit', (e) => {
    output.textContent = `A submit event has been fired at ${e.timeStamp}`;
    e.preventDefault()
});