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
