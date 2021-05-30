// ************ SEARCH FOR ITEMS ********
const SEARCH = document.forms['search-item'].querySelector('input');

// Add our event listener
SEARCH.addEventListener('keyup', (e) => {

    // Let's grab the user's text and convert text to lowercase method
    let text = e.target.value.toLowerCase();

    // Let's grab each li tag
    let groceryList = document.querySelector('#grocery-list ul');
    let groceries = groceryList.getElementsByTagName('li');

    // Convert the groceries array to be able to use forEach method.
    let groceriesArray = Array.from(groceries);

    // Loop through each grocery item
    groceriesArray.forEach((grocery) => {

        let groceryName = grocery.firstElementChild.textContent;

        // Convert our text to lowercase
        let groceryNameLower = groceryName.toLowerCase();

        // Use indexOf to match item. Hide all others.
        if (groceryNameLower.indexOf(text) == -1) {
            grocery.style.display = 'none';
        }else{
            grocery.style.display = 'block';
        }


    });
});




// ************ HIDE ITEMS ********
let checkbox = document.querySelector('#hide');

checkbox.addEventListener('change', (e) => {
    let groceryList = document.getElementById('grocery-list');
    if (checkbox.checked) {
        groceryList.style.display = 'none';
    } else {
        groceryList.style.display = 'block';
    }
});



// ************ DELETE ITEMS ****************
let groceryListUL = document.querySelector('#grocery-list ul');
groceryListUL.addEventListener('click', remove);

function remove(e) {
    let target = e.target;
    if (target.className == 'delete') {
        let li = target.parentElement;
        li.remove();
    }
}



// ************ ADD ITEM ****************
let formAdd = document.getElementById('add-item');

formAdd.addEventListener('submit', e => {

    // prevent page refresh
    e.preventDefault()

    let ul = document.getElementsByTagName('ul')[0];
    let text = formAdd.querySelector('input').value;

    // creating the list items dynamically
    let li = document.createElement('li');
    let groceryName = document.createElement('span');
    let deleteButton = document.createElement('span');

    // spans are nested within the li element
    li.appendChild(groceryName);
    li.appendChild(deleteButton);
    ul.appendChild(li);

    // add text
    groceryName.textContent = text;
    deleteButton.textContent = 'delete';

    // add classes
    groceryName.classList.add('name');
    deleteButton.classList.add('delete')
});
