// grab out output <p> element.
let output = document.getElementById('output');


// grab out input textbox.
let nameText = document.querySelector('input[type=text]');


document.querySelector('form').addEventListener('submit', (e) => {
    output.textContent = `A submit event has been fired at ${e.timeStamp}`;
    e.preventDefault();
});


// lets play around with different event types.
nameText.addEventListener('input', () => {
    output.textContent = `The value entered is ${nameText.value}`;
});


nameText.addEventListener('focus', (e) => {
    e.target.style.background = "lightblue";
    e.target.style.color = "red";
});


nameText.addEventListener('copy', () => {
    alert('you have copied text');
});