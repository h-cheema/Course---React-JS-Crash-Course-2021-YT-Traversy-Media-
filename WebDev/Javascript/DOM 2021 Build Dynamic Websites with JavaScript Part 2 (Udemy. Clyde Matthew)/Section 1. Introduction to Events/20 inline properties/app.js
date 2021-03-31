// step 1: grab the div element and the button
let content = document.getElementById('content');
let button = document.getElementById('show-more');

// step 2: adding event listener and handler (using inline peroperty approach)
button.onclick = () => {
    if (content.className == "") {
        // expand the box
        content.className = "open";
        button.innerHTML = "collapse now";
    } else {
        // collapse the box
        content.className = "";
        button.innerHTML = "Expand"
    }
}