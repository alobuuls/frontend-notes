const btnAddItem = document.getElementById('btn-add-item');
const ctnItems = document.getElementById('ctn-items');
let liToDo = document.querySelectorAll('.to-do').length;

let i = liToDo;

const addItem = () => {
  const newItem = document.createElement('li');
  newItem.textContent = `Item ${i}`;
  newItem.classList.add('to-do');
  ctnItems.append(newItem);
}

const isMoreThanX = x => {
  return i >= x;
}

btnAddItem.addEventListener('click', () => {
  
  if ( !isMoreThanX(5) ) {
    i++;
    addItem();
    return;
  }

  btnAddItem.setAttribute('disabled', true);
  btnAddItem.textContent = 'Limite Alcanzado';
});