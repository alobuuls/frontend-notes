const btnItemList = document.getElementById('btn-item-list');
const ctn = document.getElementById('ctn-list');
let btnwasClickedAlready = false;

const addItem = () => {
  const newItem = document.createElement('li');
  newItem.textContent = 'Nuevo Item';
  ctn.append(newItem);
}

btnItemList.addEventListener('click', () => {
  if ( !btnwasClickedAlready ) {
    btnwasClickedAlready = true;
    addItem();
  }
});